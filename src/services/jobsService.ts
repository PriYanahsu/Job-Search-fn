import apiClient from "@/lib/apiClient";

export type JobModel = {
  id: number;
  jobTittle: string;
  description: string;
  skillsRequired: string[];
};

export async function getAllJobs() {
  const res = await apiClient.get<JobModel[]>("/api/jobs/getAllJobs");
  return res.data;
}

export type AddJobPayload = Omit<JobModel, "id">;

export async function addJob(payload: AddJobPayload) {
  const res = await apiClient.post("/api/jobs/addJob", payload);
  return res.data as unknown;
}

export type AppliedJobModel = {
  jobId: number;
  status?: string;
};

export async function getAppliedJobs(userId: number) {
  const res = await apiClient.get<AppliedJobModel[] | { data?: AppliedJobModel[] }>(
    `/api/jobs/applied/${userId}`
  );
  return res.data;
}

