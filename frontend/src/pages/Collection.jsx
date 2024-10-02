import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const handleCategory = (e) => {
    if (e.target.checked) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
  };

  const handleSubCategory = (e) => {
    if (e.target.checked) {
      setSubCategory([...subCategory, e.target.value]);
    } else {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    }
  };

  const handleFilter = () => {
    let result = products.slice();
    if (category.length > 0) {
      result = result.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      result = result.filter((item) => subCategory.includes(item.subCategory));
    }

    if (showSearch && search) {
      result = result.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilterProducts(result);
  }

  useEffect(() => {
    handleFilter();
  }, [category, subCategory, search, showSearch]);

  const sortProduct = () => {
    let result = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        result = result.sort((a, b) => a.price - b.price);
        setFilterProducts(result);
        break;
      case 'high-low':
        result = result.sort((a, b) => b.price - a.price);
        setFilterProducts(result);
        break;
      case 'new-old':
        result = result.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFilterProducts(result);
        break;
      case 'old-new':
        result = result.sort((a, b) => new Date(a.date) - new Date(b.date));
        setFilterProducts(result);
        break;
      default:
        handleFilter();
        break;
    }
  }


  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={() => {
          setShowFilter(!showFilter);
        }} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={handleCategory} />Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={handleCategory} />Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={handleCategory} />Kids
            </p>
          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onClick={handleSubCategory} />Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'} onClick={handleSubCategory} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onClick={handleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>


      {/* Right Side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="new-old">Release Date: New to Old</option>
            <option value="old-new">Release Date: Old to New</option>
          </select>
        </div>

        {/* Map products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

      </div>
    </div>
  )
};

export default Collection;
