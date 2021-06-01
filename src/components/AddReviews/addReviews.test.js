import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import {Products} from './addReviews'

it('should do a post axios request', () => {

    Products('/reviews/:id', {}).then(response => {
        expect(response).toEqual({
          data: {},
        });
      });
      expect(mockAxios.request).toHaveBeenCalledWith({
        method: 'post',
        url: '/reviews/:id'
      });
      expect(mockAxios.request).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).not.toHaveBeenCalled();
      done();
  
})