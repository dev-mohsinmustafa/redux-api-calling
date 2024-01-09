import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../redux/slices/commentsSlice';






const Comments = () => {


    const comments = useSelector(state => state.comment.comments);
    console.log("Current comments state:", comments);

    const dispatch = useDispatch();


    return (
        <div className='container mx-auto flex flex-col max-w-[80%] justify-center items-center border border-yellow-200'>
            <div className='text-7xl'>Comments Components</div>
            <div>
                <button className='' onClick={() => dispatch(fetchComments())}>Fetch Comments</button>
            </div>


            <div className=''>
                {
                    comments && comments.map((comment, index) => {
                        console.log("fetch data from json placeholder api=>", comment);
                        return (
                            <div key={index} className=''>
                                <div className="card py-5">
                                    <h1>postId :{comment.postId}</h1>
                                    <h1>comment id :{comment.id}</h1>
                                    <p className="title">title :{comment.name}</p>
                                    <p>email :{comment.email}</p>
                                    <p>comment body: {comment.body}</p>

                                    <div className='space-x-5'>
                                        <a href="#"><i className="fa fa-dribbble"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Comments;