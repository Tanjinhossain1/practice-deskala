import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Candidate = ({ index, refetch, candidate }) => {
    const { name, birthDate } = candidate;
    const navigate = useNavigate()


    // delete candidate 
    const deleteCandidate = (id) => {
        const deleteConfirm = window.confirm('are you sure to delete');
        if (deleteConfirm) {
            fetch(`https://murmuring-plateau-96654.herokuapp.com/deleteCandidate/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('delete done')
                    }
                    refetch()
                })
        }
    }

    return (
        <tr  >
            <th>{index}</th>
            <td>{name}</td>
            <td >{birthDate}</td>
            <td>{candidate.userEmail}</td>
            <td>
                <select className="select select-ghost w-3/4 max-w-xs">
                    <option selected>ShortList</option>
                    <option>Rejected</option>

                </select>
            </td>
            <td onClick={() => navigate(`updateCandidate/${candidate._id}`)} className='text-blue-500'><FontAwesomeIcon icon={faPen} /></td>
            <td onClick={() => deleteCandidate(candidate._id)} className='text-red-500'><FontAwesomeIcon icon={faTrashCan} /></td>

        </tr>
    );
};

export default Candidate;