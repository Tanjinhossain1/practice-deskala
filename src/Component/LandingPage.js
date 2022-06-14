import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Candidate from './Candidate';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()
  const { isLoading, error, data: candidates, refetch } = useQuery('candidates', () =>
    fetch('https://murmuring-plateau-96654.herokuapp.com/allCandidates').then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <button className="btn loading">loading</button>
  }
  console.log(candidates)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Result</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              candidates.map((candidate, index) => <Candidate refetch={refetch} index={index} candidate={candidate} key={candidate._id} />)
            }
          </tbody>
        </table>
        <button onClick={() => navigate('/createCandidate')} className='text-blue-300 ml-12 mt-6'><FontAwesomeIcon icon={faPlus} /> Add New Candidate</button>
      </div>
    </div>
  );
};
export default LandingPage;