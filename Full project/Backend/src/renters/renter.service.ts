import Renter from "./renter.schema";
import bcrypt from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
} from "../common/helper/token.helper";

/**
 * Renter signup service
 *
 * @param {string} name - Renter name
 * @param {string} email - Renter email
 * @param {string} password - Renter password
 * @returns {Promise<object>}
 */
export const renterSignupService = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const existingRenter = await Renter.findOne({ email });
    if (existingRenter) {
      return { error: "User already exists" };
    }

    const renter = await Renter.create({
      name,
      email,
      password,
      role: "USER",
      active: true,
    });

    const accessToken = createAccessToken(renter);
    const refreshToken = createRefreshToken(renter);

    return {
      data: {
        message: "User created successfully. Please complete your KYC",
        accessToken: accessToken,
        refreshToken: refreshToken,
        renter: {
          id: renter._id,
          name: renter.name,
          email: renter.email,
          role: renter.role,
        },
      },
    };
  } catch (error) {
    return { error: "Server error" };
  }
};

/**
 * Renter login service
 *
 * @param {string} email - Renter email
 * @param {string} password - Renter password
 * @returns {Promise<object>}
 */
export const renterLoginService = async (email: string, password: string) => {
  try {
    // console.log(email);
    const renter = await Renter.findOne({ email });
    if (!renter) {
      return { error: "No user found" };
    }

    const isMatch = await bcrypt.compare(password, renter.password);
    if (!isMatch) {
      return { error: "Invalid password" };
    }

    const accessToken = createAccessToken(renter);
    const refreshToken = createRefreshToken(renter);

    return {
      data: {
        message: "Login successful",
        accessToken: accessToken,
        refreshToken: refreshToken,
        kycCompleted: renter.kycCompleted,
      },
    };
  } catch (error) {
    return { error: "Server error" };
  }
};
