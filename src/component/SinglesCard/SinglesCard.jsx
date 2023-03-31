import React from 'react';

const SinglesCard = (props) => {
    const { id, date, coverImg, authorImg, time, Title, author_name } = props.item;



    return (
        <div className='px-10'>
            <div className="card w-[700px]  bg-base-100 shadow-xl">
                <figure><img src={coverImg} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className='flex justify-between'>

                        <div className='flex gap-5'>
                            <div><img className='h-[50px]' src={authorImg} alt="" /></div>
                            <div> <h1 className='text-xl font-semibold'>{author_name}</h1>
                                <h1>{date}</h1>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <div>
                                    <p className='inline-block'>{time} min read</p>

                                </div>
                                <div onClick={() => props.BookmarkItem(props.item)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    <h2 className="text-3xl font-bold mt-4">
                        {Title}

                    </h2>
                    <div className="card-actions ">
                        <p className='text-cyan-600'>#beginners #programming</p>
                    </div>
                    <span  className="underline underline-offset-1 ... text-blue-600 cursor-pointer">Mark as read</span>
                </div>
            </div>
        </div>
    );
};

export default SinglesCard;