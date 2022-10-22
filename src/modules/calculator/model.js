const { fetch, fetchData} = require('../../utils/postgres')

const getCalculator = async(home_id, pay_time ) => {
    const bank = await fetch(`select
                                *
                            from
                                banks as b
                                inner join pay_time as t on t.bank_id = b.id
                            where
                                t.pay_time = $1
                                and b.cash_limit >= (
                                select
                                    r.size * p.price_kv as price
                                from
                                    rooms as r
                                    inner join projects as p on r.project_id = p.id
                                where
                                    r.id = $2
                                );`, pay_time, home_id)

    const room = await fetch(`select
        *
    from
        rooms as r
        inner join projects as p on p.id = r.project_id
    where
        r.id = $1
     `, home_id)


     if (!bank || !room) {
        return null
     }

     const summa = room.size * room.price_kv
     const starting = (bank.starting_pay / 100) * summa
     const monthly = (summa - starting) / bank.pay_time 



    
     

     return {
        bank: bank,
        calculating: {
            summa,
            starting,
            monthly,
            bank_servis: bank.bank_servise 
        }   
     }


}

module.exports = {
    getCalculator
}