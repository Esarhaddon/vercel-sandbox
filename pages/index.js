export default () => {
  return (
    <div>
      <div>hello from index.js!</div>
      <div>commit ref is {process.env.NEXT_PUBLIC_COMMIT_REF}</div>
    </div>
  )
}
