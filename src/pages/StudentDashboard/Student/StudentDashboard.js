import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../Context/AuthProvider"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import useProfileAPI from "../../../Hooks/useProfileAPI"

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [countOn, setCountOn] = useState(false)

  const url = "https://nerd-academy-server.vercel.app/users"
  const query = user?.email
  const queryName = "email"

  const { datas } = useProfileAPI(url, queryName, query)

  return (
    <div className="mx-auto mt-10">
      <div className="ml-auto mb-6">

        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-primary">
              <div className="left-content flex flex-col items-center pb-10">
                <img
                  className="w-20 h-20 mb-3 rounded-full shadow-lg border
                  border-zinc-50 my-4"
                  src="https://cdn-icons-png.flaticon.com/512/5179/5179450.png"
                  alt=""
                />
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <div>
                    <h1
                      className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center"
                    >
                      {countOn && (
                        <CountUp
                          start={0}
                          end={datas.purchased}
                          duration={1.3}
                          delay={0}
                        ></CountUp>
                      )}
                    </h1>
                    <h5
                      className="mb-1 text-xs font-medium text-gray-900
                      dark:text-white"
                    >
                      Purchased Courses
                    </h5>
                  </div>
                </ScrollTrigger>
              </div>
            </div>

            <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-secondary ">
              <div className="left-content flex flex-col items-center pb-10">
                <img
                  className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4"
                  src="https://cdn-icons-png.flaticon.com/512/9573/9573959.png"
                  alt=""
                />
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <div>
                    <h1
                      className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center"
                    >
                      {countOn && (
                        <CountUp
                          start={0}
                          end={0}
                          duration={1.3}
                          delay={0}
                        ></CountUp>
                      )}
                    </h1>
                    <h5
                      className="mb-1 text-xs font-medium text-gray-900
                      dark:text-white"
                    >
                      Completed Courses
                    </h5>
                  </div>
                </ScrollTrigger>
              </div>
            </div>

            <div className="w-11/12 max-w-sm  rounded-md shadow-md border border-primary ">
              <div className="left-content flex flex-col items-center pb-10">
                <img
                  className="w-20 h-20 mb-3 rounded-full shadow-lg border border-zinc-50 my-4"
                  src="https://cdn-icons-png.flaticon.com/512/9084/9084691.png"
                  alt=""
                />
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <div>
                    <h1
                      className="text-black-500 dark:text-gray-400 
                                        text-bold font-semibold text-3xl text-center"
                    >
                      {countOn && (
                        <CountUp
                          start={0}
                          end={datas.spend}
                          duration={1.3}
                          delay={0}
                        ></CountUp>
                      )}
                    </h1>
                    <h5
                      className="mb-1 text-xs font-medium text-gray-900
                      dark:text-white"
                    >
                      Total Spend
                    </h5>
                  </div>
                </ScrollTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
