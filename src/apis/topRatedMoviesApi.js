import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function getTopRatedMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Top Rated 영화 목록 불러오기 실패 : ", error);
    throw error;
  }
}
