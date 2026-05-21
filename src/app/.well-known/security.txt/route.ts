export function GET() {
  const body = `# Security Policy for Githubster
# https://www.githubster.com

Contact: https://github.com/madeburo/githubster/issues
Expires: 2027-12-31T23:59:00.000Z
Preferred-Languages: en, ru
Canonical: https://www.githubster.com/.well-known/security.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
