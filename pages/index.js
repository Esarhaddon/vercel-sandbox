export default () => {
  return (
    <div>
      <div>hello from index.js!</div>
      <div>
        process.env.VERCEL_GITHUB_COMMIT_REF is{" "}
        {process.env.NEXT_PUBLIC_COMMIT_REF}
      </div>
    </div>
  )
}
