export async function call_api(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http error! status: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log("api 호출 실패 : ", error);
    throw error;
  }
}
