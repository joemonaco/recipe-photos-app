export default async function getRecipes() {
  try {
    const response = await fetch("http://localhost:3000/api/recipes", {
      cache: "no-store",
    });
    const courses = await response.json();
    return courses.data;
  } catch (error) {
    console.log(error);
  }
}
