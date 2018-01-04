import React, { Component } from 'react';
import { Container, Content, Text, Spinner } from 'native-base';
import axios from 'axios';
import SearchHeader from '../SearchHeader';
import SearchBody from '../SearchBody';

export default class SearchTab extends Component {
   static navigationOptions = {
      header: null
   }

   state = {
      searchBeer: '',
      beerData: {},
      beerFound: false
   }

   beerSearch = () => {
      const beerName = this.state.searchBeer.toLowerCase();

      const query = `https://api.brewerydb.com/v2/search?q= ${beerName}  &type=beer&key=940f1167211d883d96d9a86d4b39d4b9`;

      axios.get(query).then((response) => {
         const data = response.data.data[0] ? response.data.data[0] : false;
         console.log(data);

         if (data) {
            this.setState({
               beerData: data,
               beerFound: true
            });
         }
      }).catch((error) => {
         console.log(error);
         this.setState({
            beerFound: false
         });
      });
   }

   renderContent = () => {
      if (this.state.beerFound) {
         return <SearchBody beerData={this.state.beerData} />;
      } else {
         console.log('beer not found');
         return <Spinner />;
      }
   }

   render() {
      return (
         <Container>
            <SearchHeader
               value={this.state.searchBeer}
               onChangeText={(searchBeer) => this.setState({ searchBeer })}
               beerSearch={this.beerSearch}
            />
            <Content>
               {this.renderContent()}
            </Content>
         </Container>
      );
   }
}
