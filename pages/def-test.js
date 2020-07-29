export default () => {
  if (process.env.VERCEL_GITHUB_COMMIT_REF) {
    return <div>env var is defined</div>
  } else {
    return <div>env var is undefined</div>
  }
}
