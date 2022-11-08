import CategoryItem from '../category-item/category-item.component';
import '/Users/sarahrayfuse/Desktop/crwn-clothing-v2/src/components/directory/directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
            </div>
    )
}

export default Directory