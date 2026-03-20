import apiClient from "@/lib/apiClient";

export type ApplyJobPayload = {
  userId: number;
  jobId: number;
};

export async function applyJob(payload: ApplyJobPayload) {
  const res = await apiClient.post("/api/application/apply", payload);
  console.log(res.data);
  return res.data as unknown;
}

