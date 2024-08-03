import load from "../../assets/loading.gif"
const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={load} alt="loading" />
    </div>
  )
}

export default Spinner