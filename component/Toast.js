function Toast() {
  return (
    <div>
      <div className="toast toast-end">
        <div className="alert bg-base-100 rounded-3xl ">
          <span> 👋🏽 Want to see more projects?</span>
        </div>
        <div className="btn btn-accent rounded-3xl">
          <span> ✨ Checkout my github. </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 7h10v10M7 17L17 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Toast;
