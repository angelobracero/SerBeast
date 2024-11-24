const BASE_URL = "https://localhost:7134/api";

///
/// PROFESSIONALS
///
export async function fetchProfessionals() {
  const response = await fetch(`${BASE_URL}/Professional`);

  if (!response.ok) {
    const error = new Error("An error occured while fetching the professional");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { result } = await response.json();

  return result;
}

export async function fetchProfessional({ id, signal }) {
  const response = await fetch(`${BASE_URL}/Professional/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occured while fetching the professional");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { result } = await response.json();

  return result;
}

///
/// PROFESSIONALS SERVICE
///
export async function fetchProfessionalServices(id) {
  const response = await fetch(
    `${BASE_URL}/ProfessionalService/professional/${id}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      return [];
    } else {
      const error = new Error(
        "An error occurred while fetching the professional service"
      );
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  }

  const { result } = await response.json();

  return result;
}

export async function addProfessionalService(serviceData) {
  const response = await fetch(`${BASE_URL}/ProfessionalService`, {
    method: "POST",
    body: serviceData,
  });

  if (!response.ok) {
    const errorInfo = await response.json();
    const error = new Error(
      "An error occurred while fetching the professional"
    );
    error.code = response.status;
    error.info = errorInfo;
    console.error("Error info:", errorInfo);
    throw error;
  }

  const data = await response.json();
  return data;
}

export async function updateProfessionalService(
  professionalServiceId,
  updatedData
) {
  const formData = new FormData();

  // Append the text fields to the FormData
  formData.append("CategoryId", updatedData.CategoryId);
  formData.append("ServiceId", updatedData.ServiceId);
  formData.append("Price", updatedData.Price);
  formData.append("Description", updatedData.Description);

  // Append the image file if it exists
  if (updatedData.Image) {
    formData.append("Image", updatedData.Image);
  }

  console.log("FormData: ", formData);

  // Send the PUT request with the FormData object
  const response = await fetch(
    `${BASE_URL}/ProfessionalService/${professionalServiceId}`,
    {
      method: "PUT",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorInfo = await response.json();
    const error = new Error(
      "An error occurred while updating the professional service"
    );
    error.code = response.status;
    error.info = errorInfo;
    console.error("Error info:", errorInfo);
    throw error;
  }

  const data = await response.json();
  return data;
}

export async function deleteProfessionalService(professionalServiceId) {
  const response = await fetch(
    `${BASE_URL}/ProfessionalService/${professionalServiceId}`,
    {
      method: "DELETE",
    }
  );

  console.log(response);

  if (!response.ok) {
    const error = new Error(
      "An error occurred while deleting the professional service"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return true;
}

///
/// CATEGORIES
///
export async function serviceCategories() {
  const response = await fetch(`${BASE_URL}/Category`);

  if (!response.ok) {
    const error = new Error("An error occured while fetching the professional");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { result } = await response.json();

  return result;
}

///
/// SERVICES
///
export async function fetchService({ id, signal }) {
  const response = await fetch(`${BASE_URL}/Service/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occured while fetching the professional");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { result } = await response.json();

  return result;
}

///
/// REGISTER
///
export async function createNewUser({ userData, endpoint }) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occured while fetching the professional");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}

///
/// LOGIN
///
export async function login(userData) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessages = data.errorMessages || [
        "An unexpected error occurred",
      ];
      throw new Error(errorMessages.join(", "));
    }

    return data;
  } catch (error) {
    throw error;
  }
}

///
/// Bookings
///
export async function fetchBookingsUser(userId) {
  try {
    const response = await fetch(`${BASE_URL}/Booking/User/${userId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    if (response.status === 204) {
      return [];
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function fetchBookingsPro(proId) {
  try {
    const response = await fetch(`${BASE_URL}/Booking/Professional/${proId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseText = await response.text();
    if (!responseText) {
      return [];
    }

    const data = JSON.parse(responseText);

    return data.isSuccess && Array.isArray(data.result) ? data.result : [];
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function addBooking(bookingData) {
  const response = await fetch(`${BASE_URL}/Booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    const errorInfo = await response.json();
    const error = new Error(
      "An error occurred while fetching the professional"
    );
    error.code = response.status;
    error.info = errorInfo;
    console.error("Error info:", errorInfo);
    throw error;
  }

  const data = await response.json();
  return data;
}

export async function updateStatusToConfirm(bookingId) {
  const response = await fetch(
    `${BASE_URL}/Booking/${bookingId}/status/confirm`,
    {
      method: "PUT",
    }
  );

  if (!response.ok) {
    const errorInfo = await response.json();
    const error = new Error("An error occurred while change booking status");
    error.code = response.status;
    error.info = errorInfo;
    console.error("Error info:", errorInfo);
    throw error;
  }

  const data = await response.json();
  return data;
}

export async function updateStatusToCancelled(bookingId) {
  const response = await fetch(
    `${BASE_URL}/Booking/${bookingId}/status/cancelled`,
    {
      method: "PUT",
    }
  );

  if (!response.ok) {
    const errorInfo = await response.json();
    const error = new Error("An error occurred while change booking status");
    error.code = response.status;
    error.info = errorInfo;
    console.error("Error info:", errorInfo);
    throw error;
  }

  const data = await response.json();
  return data;
}
