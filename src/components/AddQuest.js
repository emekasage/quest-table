import React from 'react'

export default function AddQuest(props) {
    return (
        <div>
            <form>
                <h6>Create Quest</h6>
                <p>
                    To create new quest, please fill the form below. Make sure that you type correct Finishes Count.
                </p>
                <div className = "form-group">
                    <input type="text" class="form-control formstyle" id="quest-title" placeholder="Title of the quest" />
                </div>
                <div class="form-group">
                    <select class="form-select form-select-lg mb-3" id="sel1">
                        <option selected disabled hidden>Choose type of the quest</option>
                        <option>Quiz</option>
                        <option>Reflection</option>
                    </select>
                </div>
                <div class="form-group form-row">
                    <select class="form-select col-md-6 reward">
                        <option selected disabled hidden>Reward</option>
                        <option>25</option>
                        <option>50</option>
                        <option>75</option>
                    </select>
                    <div class="form-group col-md-6">
                        <input type="number" class="form-control formstyle" placeholder="Finish Count"/>
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-tertiary" onClick={()=>props.setShowModal(!props.showModal)}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick="">
                        Create
                    </button>
                </div>
                
            </form>
            
        </div>
    )
}
