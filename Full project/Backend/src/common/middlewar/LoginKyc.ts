import { Request, Response, NextFunction } from "express";
import Renter from "../../renters/renter.schema";
import Admin from "../../admin/admin.schema";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const LoginKyc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "") || "";
  if (!token) {
    res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECURITY as string
    ) as JwtPayload;

    if (decoded.role == "USER") {
      const user = await Renter.findById(decoded.id);
      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }
      if (!user.kycCompleted) {
        res.status(403).json({
          message:
            "KYC is not completed. Please complete KYC to proceed with this action.",
        });
        return;
      }
      next();
    } else {
      const user = await Admin.findById(decoded.id);
      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }
      if (!user.kycCompleted) {
        res.status(403).json({
          message:
            "KYC is not completed. Please complete KYC to proceed with this action.",
        });
        return;
      }
    }
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
    return;
  }
};
