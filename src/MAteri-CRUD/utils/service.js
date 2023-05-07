import storageManager from "./storageManager";

const addCourse = (payload) => {
  const currItem = storageManager.get();
  if (currItem !== null) {
    const combineItem = [...currItem, payload];
    storageManager.set(combineItem);
  } else {
    storageManager.set([payload]);
  }

  return {
    data: payload,
  };
};

const getCourses = () => {
  const result = storageManager.get();
  const response = {
    data: result !== null ? result : [],
  };
  return response;
};

const courseService = {
  addCourse,
  getCourses,
};

export default courseService;
