import React from 'react';

const Blog = () => {
    const styl = {
        
    }
    return (
        <div style={{width:'100%' , display:'flex' , alignItems:'center' , justifyContent:'center' , flexWrap:'wrap' , height:'100vh' , }}>
            <div className='mx-5'>
                <h4  className='text-5xl mb-5'>When you shut use context api?</h4>
                <p className='mb-8'>The new React Context API, introduced in React v. 16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. In this tutorial, we'll explore how we can use React Context to avoid prop drilling.</p>
                <h4  className='text-5xl mb-5'>What is custom hook in react?</h4>
                <p className='mb-8'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                <h4  className='text-5xl mb-5'>What is useref ?</h4>
                <p className='mb-8'>❮ Previous Next ❯ The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                <h4  className='text-5xl mb-5'>what is usememo ?</h4>
                <p className='mb-8'>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
            </div>
        </div>
    );
};

export default Blog;