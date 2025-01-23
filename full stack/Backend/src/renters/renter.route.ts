import express from "express";
import carRoutes from "../car/car.route";
import rentalRoute from "../rentalCar/rental.route";
import { renterLogin, renterSignup } from "./renter.control";
import UserAuthMiddleware from "../common/middlewar/auth.middleware";
import { checkKYC } from "../common/middlewar/kycChecker.middle";
import { completeKYC, uploadKYC } from "../common/helper/kyc.helper";
import { refreshToken } from "../common/middlewar/token.regenreate";
import {
  renterLoginValidator,
  renterSignupValidator,
} from "./renter.validator";
import { LoginKyc } from "../common/middlewar/LoginKyc";

const router = express.Router();

// Route for admin signup
router.post("/signup", renterSignupValidator, renterSignup);
router.patch("/kycComplete", UserAuthMiddleware, uploadKYC, completeKYC);
// Route for admin login
router.post("/login", renterLoginValidator, renterLogin);
router.use("/cars", carRoutes);
router.use("/rentalCars", UserAuthMiddleware, checkKYC, rentalRoute);

router.use("/refresh", refreshToken);

export default router;
