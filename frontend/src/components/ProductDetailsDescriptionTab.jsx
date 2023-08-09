import React from "react";

const ProductDetailsDescriptionTab = () => {
  return (
    <>
      <img
        src="/product-details/description_product_details.png"
        alt="description macbook"
      />
      <img src="/product-details/macbookPro.jpg" alt="macbook pro" />
      <p className="font-base mt-8 text-base text-gray-500">
        A groundbreaking Retina display. Powerful dual-core and quad-core Intel
        processors. Fast flash storage. High-performance graphics. Great
        built-in apps. And now in the 13-inch model, a revolutionary new Force
        Touch trackpad and even longer battery life.1 Whatever you can imagine,
        MacBook Pro with Retina display gives you the power to create.
      </p>
      <p className="font-base mt-8 text-base text-gray-500">
        The design of MacBook Pro packs a lot of power into not a lot of space.
        Because we believe that high performance shouldn’t come at the expense
        of portability. And despite being so compact, the new 13-inch and
        15-inch MacBook Pro with Retina display models now deliver up to 10
        hours and nine hours of battery life, respectively — an hour more than
        the previous models.
      </p>

      <img
        src="/product-details/macbook_keypad.jpg"
        alt="macbook keypad"
        className="mt-8"
      />
      <p className="font-base mt-8 text-base text-gray-500">
        With Multi-Touch in OS X, you can use realistic gestures like swiping or
        pinching to switch between apps, navigate your content and get the most
        out of your desktop space.
      </p>
      <p className="font-base mt-8 text-base text-gray-500">
        The new Force Touch trackpad takes all the capabilities of Multi-Touch
        and adds force sensors that detect subtle differences in the amount of
        downward pressure you apply. This lets you have a deeper connection to
        your content, bringing more functionality to your fingertip. It also
        introduces haptic feedback to MacBook Pro — allowing you to not just see
        what’s happening on the screen, but to feel it.
      </p>
      <div className="mt-8">
        <p className="text-base text-gray-500">
          <strong>SKU:</strong> 5487FB8/42
        </p>
        <p className="text-base text-gray-500">
          <strong>Category:</strong> Headphones
        </p>
      </div>
    </>
  );
};

export default ProductDetailsDescriptionTab;
