import Callback from "@/database/callback.model";
import { connectToDatabase } from "../db";

/**
 * Get all callback requests
 */
interface getAllRequestsProps {
  profileId: string;
}

export const getAllRequestFromProfile = async (params: getAllRequestsProps) => {
  try {
    connectToDatabase();
    const { profileId } = params;

    const requests = await Callback.find({ profileId });

    return { data: requests };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

/**
 * Create a callback request
 */
interface createCallbackProps {
  userId: string;
  vendorId: string;
  query: string;
  contactNumber: string;
  email: string;
}

export const createRequestCallback = async (params: createCallbackProps) => {
  try {
    connectToDatabase();
    const { userId, vendorId, query, contactNumber, email } = params;

    const callback = await Callback.create({
      userId,
      vendorProfile: vendorId,
      query,
      contactNumber,
      email,
    });

    return { data: callback };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

/**
 * Answer a callback request
 */
interface answeredRequestCallback {
  callbackId: string;
}

export const answerCallback = async (params: answeredRequestCallback) => {
  try {
    connectToDatabase();
    const { callbackId } = params;

    const callback = await Callback.findById(callbackId);

    if (!callback) {
      throw new Error("Callback not found");
    }

    callback.answered = !callback.answered;
    await callback.save();

    return {
      data: callback,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

/**
 * Archive a callback request
 */
interface archiveRequestCallback {
  callbackId: string;
}

export const archiveCallback = async (params: archiveRequestCallback) => {
  try {
    connectToDatabase();
    const { callbackId } = params;

    const callback = await Callback.findById(callbackId);

    if (!callback) {
      throw new Error("Callback not found");
    }

    callback.archived = !callback.archived;

    await callback.save();

    return {
      data: callback,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

/**
 * Delete a callback request
 */
interface deleteRequestCallback {
  callbackId: string;
}

export const deleteCallback = async (params: deleteRequestCallback) => {
  try {
    connectToDatabase();
    const { callbackId } = params;

    const callback = await Callback.findByIdAndDelete(callbackId);

    return {
      data: callback,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
