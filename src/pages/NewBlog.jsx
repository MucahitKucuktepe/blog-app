import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useSelector } from 'react-redux'

const NewBlog = () => {
  const {getCategories}=useBlogCalls()
  const {categories}= useSelector(state=>state.blog)
  useEffect(() => {
  getCategories()
  }, [])
  console.log(categories)
  return (
    <div>NewBlog</div>
  )
}

export default NewBlog