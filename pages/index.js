import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

const cardContents = [
	{ title: "Get 🍕 for free", contents: "Call Dominos and tell them the coupon 184fw2. They will serve you with a free pizza. 🎉 Celebrate", 
		tags: ["Pizza", "Free", "Dominos", "Blog"]
	}
]


export default function IndexPage() {
  return (
    <Layout>
      <div className="flex">
      	{cardContents.map(({ title, contents, tags }) => {
      		return (
      			<Card
      				title={title}
      				contents={contents}
      				tags={tags}
      			/>
      		);
      	})}
      </div>
    </Layout>
  )
}
