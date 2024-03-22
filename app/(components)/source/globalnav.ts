export type TypeSrc = {
    title: string,
    src:{
        title:string,
        to:string
    }[]
}
export interface TypeNavigation {
    to: string,
    title: string,
    src:TypeSrc[]
}
 const Navigation:TypeNavigation[] = [
    {to: "/store", title:"Store", src:[
        {title: 'Store', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Quick Links', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'Shop Special Stores', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ] },
    {to: "/shop/buy-mac", title: "Mac", src:[
        {title: 'Explore Mac', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop Mac', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from Mac', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/shop/buy-ipad", title: "iPad", src:[
        {title: 'Explore iPad', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop iPad', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from iPad', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/shop/buy-iphone", title: "iPhone", src:[
        {title: 'Explore iPhone', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop iPhone', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from iPhone', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/shop/buy-watch", title: "Watch", src:[
        {title: 'Explore Watch', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop Watch', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from Watch', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/shop/buy-vision", title: "Vision", src:[
        {title: 'Explore Vision', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop Vision', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from Vision', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/shop/buy-airpods", title: "AirPods", src:[
        {title: 'Explore AirPods', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop AirPods', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from AirPods', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/tv-home", title: "TV & Home", src:[
        {title: 'Explore TV & Home', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Shop TV & Home', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'More from TV & Home', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
    {to: "/entertainment", title: "Entertainment", src:[
        {title: 'Explore Entertainment', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Support', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]}
    ]},
    {to: "/shop/buy-accessories", title: "Accessories", src:[
        {title: 'Shop Accessories', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Explore Accessories', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
    ]},
    {to: "/support", title: "Support", src:[
        {title: 'Explore Support', src: [
            {title: "Shop the Latest", to: "/store"},
            {title: "Mac", to: "/shop/buy-mac"},
            {title: "iPad", to: "/shop/buy-ipad"},
            {title: "iPhone", to: "/shop/buy-iphone"},
            {title: "Apple Watch", to: "/shop/buy-watch"},
            {title: "Apple  Vision Pro", to: "/shop/buy-vision"},
            {title: "Accessories", to: "/shop/buy-accessories"},
        ]},
        {title: 'Get Help', src: [
            {title: "Find a Store", to: "/retail"},
            {title: "Order Status", to: "/auth"},
            {title: "Apple Trade In", to: "/shop/trade-in"},
            {title: "Financing", to: "/shop/financing"}
        ]},
        {title: 'Helpful Topics', src: [
            {title: "Certified Refurbished", to: "/shop/refurbished"},
            {title: "Education", to: "/education"},
            {title: "Business", to: "/retail/business/"},
            {title: "Veterans and Military", to: "/shop/veterans_military"},
            {title: "Government", to: "/store/government/"}
        ]},
    ]},
]
export default Navigation