import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const getAssignments = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${courseId}`
  );
  return response.data;
};

export const getAssignment = async (assignmentId: string, courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${courseId}/${assignmentId}`
  );
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${ASSIGNMENTS_API}`,
    assignment
  );
  return response.data;
};

export const replaceAssignment = async (
  assignmentId: string,
  assignment: any
) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignmentId}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};
