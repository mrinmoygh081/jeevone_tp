export const registerEnquiryHandler = async (form, initialValue) => {
  const { myself, name, email, phone } = form;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    myself,
    name,
    phone,
    email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/send`,
      requestOptions
    );

    const result = await response.json();
    if (response.ok) {
      return { status: true, message: result.message };
    } else {
      return {
        status: true,
        message: result?.message || "Failed to submit the form.",
      };
    }
  } catch (error) {
    console.error("error", error.message);
    return {
      status: true,
      message: result?.message || "Something went wrong!",
    };
  }
};
