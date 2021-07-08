async function insrt(db, d) {
    return await db.collection('bmi_coll').insert({ d })
}

module.exports.insrt = insrt;