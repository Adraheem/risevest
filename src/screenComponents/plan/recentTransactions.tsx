import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListHeader from "@/components/ListHeader";
import Transaction from "@/components/Transaction";

interface IProps {
}

function RecentTransactions(props: IProps) {
  return (
    <View style={styles.container}>
      <ListHeader title="Recent transactions" moreText="View All" moreActive/>

      <View style={{marginVertical: 20, gap: 20}}>
        <Transaction
          amount="+$320.90"
          date={new Date()}
          description="Received from Bank Account (BOSUN TONY ADEMOSU)"
          positive
        />
        <Transaction
          amount="-$2,942.55"
          date={new Date()}
          description="Sent to Bank Account (ADEBAYO MUSILIU JAGUN)"
          positive={false}
        />
        <Transaction
          amount="-$500.12"
          date={new Date()}
          description="Sent to Service (PAYSTACK 001WA00948 - AMARDA VENTURES LIMITED)"
          positive={false}
        />
        <Transaction
          amount="+$1,840.69"
          date={new Date()}
          description="Received from Bank Account (TITUS CLEOPATRA MEDINA)"
          positive
        />
        <Transaction
          amount="+$528.04"
          date={new Date()}
          description="Received from Rise Plan (SAVE FOR SCHOOL)"
          positive
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  }
});

export default RecentTransactions;
