import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: "Conta de Luz",
        value: "123,15",
        date: "21/12/2022",
        type: 0 //despesas
    },
    {
        id: 2,
        label: "Vendas",
        value: "260,00",
        date: "10/12/2022",
        type: 1 //receita
    },
    {
        id: 3,
        label: "Salário",
        value: "7.200,00",
        date: "23/12/2022",
        type: 1 //receita
    }
]

export default function App() {
  return (
    <View style={styles.container}>
        <Header name="Daniel Jack" />

        <Balance saldo="35.000,00" gastos="361,25"/>

        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator = {false}
            renderItem={({ item })=> <Moviments data={ item } />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18, 
    fontWeight: "bold",
    margin:14
  },
  list:{
    marginLeft: 14, 
    marginRight: 14,
  }
});
