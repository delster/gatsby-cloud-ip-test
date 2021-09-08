import requestIp from "request-ip"
export default async (req, res) => {
  const clientIp = requestIp.getClientIp(req)
  res.status(200).json(clientIp)
}
