export default () => {
  return (
    <div>
      <div>hello from index.js!</div>
      <div>commit ref is {process.env.VERCEL_GITHUB_COMMIT_REF}</div>
    </div>
  )
}
