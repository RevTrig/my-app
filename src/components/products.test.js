import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import {Products} from './products'



it('should do a get axios request', () => {

    Products('/product', {}).then(response => {
        expect(response).toEqual({
          data: {},
        });
      });
      expect(mockAxios.request).toHaveBeenCalledWith({
        method: 'get',
        url: '/product'
      });
      expect(mockAxios.request).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).not.toHaveBeenCalled();
      done();
  
})