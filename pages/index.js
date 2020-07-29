export default () => {
  const ref = process.env.VERCEL_GITHUB_COMMIT_REF

  return (
    <div>
      <div>hello from index.js!</div>
      <div>process.env.VERCEL_GITHUB_COMMIT_REF is {ref}</div>
    </div>
  )
}
