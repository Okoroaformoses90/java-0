   // Sample menu data
   const menuItems = {
    Rice: [
    { image: '/images/image1.jpg', description: 'Delicious fried rice.' },

    { image: '/images/image2.jpg', description: 'Rice with Fruits.' }, 
    { image: '/images/image3.jpg', description: 'garnished Coconut rice .' },

    { image:'/images/image4.jpg', description: 'Delicious Jellof rice.'},

    { image:'/images/image5.jpg',  description: 'Fried rice &chicken.'},
    { image:'/images/image6.jpg', description: 'Jellof rice.'},
    { image:'/images/image7.jpg',  description: 'Vegetable Rice & chicken.'},
    { image: '/images/image8.jpg', description: 'Rice and Stew/Assorted Meat.'},
    { image: '/images/image9.jpg', description: 'Rice & Stew/chicken.'}
    ],

    Swallow : [
    { image:'/images/soup1.jpg', description: 'Okro with Assorted Meat.' }, 
    { image:'/images/soup2.jpg', description: 'Egwusi.' },
    { image:'/images/soup3.jpg', description: 'Vegetable.' },
    { image:'/images/soup4.jpg', description: 'Vegetable with Assorted.' },
    { image: '/images/soup5.jpg', description: 'Egwusi with Assorted.' },
    { image:'/images/soup6.jpg', description: 'Okro & Chicken.' },
    { image:'/images/soup7.jpg', description: 'Ewedu & Assorted.' },
    { image: '/images/soup8.jpg', description: 'Editan.' },
    { image:'/images/soup9.jpg', description: 'Dry Egwusi.' }
  ],

    salad: [
    { image:'/images/salad1.jpg', description: 'Vegetable Salad.' }, 
    { image:'/images/salad2.jpg', description: 'Jellof Salad' },
    { image:'/images/salad3.jpg', description: 'Vegetable Egg Salad.' },
    { image:'/images/salad4.jpg', description: 'Fruit Salad' },
    { image:'/images/salad5.jpg', description: 'Vegetable Egg Salad.' },
    { image:'/images/salad6.jpg', description: 'African Salad' }, 
    ],

    Beans: [
    { image:'/images/beans1.jpg', description: 'Vegetable Beans' }, 
    { image:'/images/beans2.jpg', description: 'Oil Beans & Plantain' },  
    { image:'/images/beans3.jpg',description: 'Jellof Beans & Plantain' },
    { image:'/images/beans4.jpg',description: 'Pepper Beans & plantain' },
    { image:'/images/beans5.jpg', description: 'Vegetable Beans & Plantain' },
    { image:'/images/beans6.jpg', description: 'Vegetable, white Rice & Beans' }
   ]
  };

  // Function to display images based on selected category
  function displayImages(category) {
    const menuImagesContainer = document.getElementById('menu-images');
    menuImagesContainer.innerHTML = ''; // Clear existing images

    // Iterate through images in the selected category and create image elements
    menuItems[category].forEach(item => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = category;

      const description = document.createElement('p');
      description.textContent = item.description;

      const orderButton = document.createElement('button');
      orderButton.textContent = 'Place Order';
      orderButton.classList.add('order-button');

      imgContainer.appendChild(img);
      imgContainer.appendChild(description);
      imgContainer.appendChild(orderButton);
      menuImagesContainer.appendChild(imgContainer);
    });
  }

  // Button click event handlers
  function showRice() {
    displayImages('Rice');
  }

  function showSwallow() {
    displayImages('Swallow');
  }

  function showSalad() {
    displayImages('salad');
  }

  function showBeans() {
    displayImages('Beans');
  }