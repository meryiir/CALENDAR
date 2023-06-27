import * as React from "react"

const Reclamations = () => {
  return (
    <>
      <span  id="" className="block mb-2 text-sm font-medium mt-8 text-gray-900 dark:text-green" style={{fontWeight: "bold" , fontSize: 20}}>Justification</span>
      <textarea id="message" rows="8" className="block p-2.5 w-full text-sm mt-8 text-white-900 bg-grey-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What doesn't satisfy you ?" />
      <button type="submit" className="inline-flex items-center py-2.5 px-4 m-3 text-xs font-medium text-center text-white bg-gray-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-gray-900">
        Send Request
      </button>

      <p style={{ color: "red", fontWeight: "bold" }} className="ml-5">
        Please send your request within 72 hours.
      </p>
    </>
  )
}

export default Reclamations