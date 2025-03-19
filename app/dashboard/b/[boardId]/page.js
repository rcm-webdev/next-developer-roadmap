async function FeebackBoard({ params }) {
  const { boardId } = await params;

  return <div>{boardId}</div>;
}

export default FeebackBoard;
