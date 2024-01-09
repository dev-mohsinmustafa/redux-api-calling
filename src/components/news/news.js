import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/slices/newsSlice';






const News = () => {

    const articles = useSelector(state => state.news.articles);
    const dispatch = useDispatch();


    return (
        <div className=' container mx-auto flex flex-col max-w-[80%] justify-center items-center border border-red-600'>
            <div className='text-7xl'>News Components</div>
            <div>
                <button className='p-5 bg-purple-300 rounded-2xl text-white' onClick={() => dispatch(fetchNews())}>Fetch Bitcoin News</button>
            </div>


            <div className=''>
                {
                    articles && articles.map((article, index) => {
                        console.log("data from articles", article, index);
                        return (
                            <div key={index} className='flex flex-col justify-center items-center '>
                                <div className="card py-5">
                                    <img src={article.urlToImage} alt={article.title} />
                                    <h1>{article.author}</h1>
                                    <p class="title">{article.title}</p>
                                    <p>{article.description}</p>
                                    <p>Published At: {article.publishedAt}</p>

                                    <div className='space-x-5'>
                                        <a href="#"><i class="fa fa-dribbble"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                    </div>
                                    <p className='px-5 '><button onClick={() => dispatch(fetchNews())}>Fetch Bitcoin News</button></p>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default News;