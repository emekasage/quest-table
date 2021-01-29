import React , {useState, useEffect} from 'react'
import Delete from './Delete';
import Archive from './Archive';
import Publish from './Publish';
import AddQuest from './AddQuest';
export default function Modals(props) {
    const [page, setPage] = useState("");
    useEffect(()=>{
        setPage(props.page)
    },[])
    return (
        <div className="modal-blur" >
            <div class="modal-inner">
                {page === "delete" && (
                <Delete 
                setShowModal={props.setShowModal} showModal={props.showModal}
                modalId={props.modalId}
                />
                )}
                {page === "archive" && (
                <Archive 
                setShowModal={props.setShowModal} showModal={props.showModal}
                modalId={props.modalId}
                />
                )}
                {page === "publish" && (
                <Publish
                setShowModal={props.setShowModal} showModal={props.showModal}
                modalId={props.modalId}
                />
                )}
                {page === "addquest" && (
                <AddQuest 
                setShowModal={props.setShowModal} showModal={props.showModal}
               
                />
                )}
            </div>       
        </div>
    )
}
