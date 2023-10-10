import Hero from '../components/Hero'
import RecentPosts from '../components/RecentPosts/RecentPosts'


function HomePage() {
  return (
    <div style={{width: "100%", boxSizing: "border-box"}}>
        <Hero />
        <RecentPosts />
    </div>
  )
}

export default HomePage