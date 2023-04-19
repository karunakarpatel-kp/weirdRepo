export default function comment(req, res) {
  const email = req.body.email;
  res.status(200).json({ name: "John Doe" });
}
