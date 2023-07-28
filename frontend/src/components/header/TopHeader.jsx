import React from 'react';
import LocationIcon from '../../assets/icons/LocationIcon';
import TrackingIcon from '../../assets/icons/TrackingIcon';
import ShopingIcon from '../../assets/icons/ShopingIcon';
import UserIcon from '../../assets/icons/UserIcon';

const TopHeader = () => {
  return (
    <div className='pl-24 pr-24 border-b-2'>
      <div className='flex justify-between items-center pt-2 pb-2 text-sm'>
        <p>Welcome to Worldwide Electronics Store</p>
        <div className='flex flex-row'>
          <span className='mr-4 text-gray-700 flex items-center'>
            <LocationIcon css='w-4 h-4 inline-block mr-1' />
            Store Locator
          </span>
          <span className='mr-4 text-gray-200 flex items-center'>|</span>
          <span className='mr-4 text-gray-700'>
            <TrackingIcon css='w-4 h-4 inline-block mr-1' />
            Track Your Order
          </span>
          <span className='mr-4 text-gray-200 flex items-center'>|</span>
          <span className='mr-4 text-gray-700'>
            <ShopingIcon css='w-4 h-4 inline-block mr-1' />
            Shop
          </span>
          <span className='mr-4 text-gray-200 flex items-center'>|</span>
          <span className='text-gray-700'>
            <UserIcon css='w-4 h-4 inline-block mr-1' /> My Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
