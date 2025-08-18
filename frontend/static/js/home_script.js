// Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Home Page...');
    initializeHomePage();
});

// miRNA Lists (User will fill in the complete lists)
const miRNA_LISTS = {
    human: [
        'hsa-let-7a-1', 'hsa-let-7a-2', 'hsa-let-7a-3', 'hsa-let-7b', 'hsa-let-7c', 'hsa-let-7d', 'hsa-let-7e', 'hsa-let-7f-1', 'hsa-let-7f-2', 'hsa-let-7g', 
        'hsa-let-7i', 'hsa-mir-1-1', 'hsa-mir-1-2', 'hsa-mir-100', 'hsa-mir-101-1', 'hsa-mir-101-2', 'hsa-mir-10226', 'hsa-mir-10392', 'hsa-mir-10393', 
        'hsa-mir-10394', 'hsa-mir-10395', 'hsa-mir-10396a', 'hsa-mir-10396b', 'hsa-mir-10397', 'hsa-mir-10398', 'hsa-mir-10399', 'hsa-mir-103a-1', 
        'hsa-mir-103a-2', 'hsa-mir-103b-1', 'hsa-mir-103b-2', 'hsa-mir-10400', 'hsa-mir-10401', 'hsa-mir-10401', 'hsa-mir-10401', 'hsa-mir-10401', 
        'hsa-mir-105-1', 'hsa-mir-105-2', 'hsa-mir-10522', 'hsa-mir-10523', 'hsa-mir-10524', 'hsa-mir-10525', 'hsa-mir-10526', 'hsa-mir-10527', 'hsa-mir-106a', 
        'hsa-mir-106b', 'hsa-mir-107', 'hsa-mir-10a', 'hsa-mir-10b', 'hsa-mir-11181', 'hsa-mir-11399', 'hsa-mir-11400', 'hsa-mir-11401', 'hsa-mir-1178', 
        'hsa-mir-1179', 'hsa-mir-1180', 'hsa-mir-1181', 'hsa-mir-1182', 'hsa-mir-1183', 'hsa-mir-1184-1', 'hsa-mir-1184-2', 'hsa-mir-1184-3', 'hsa-mir-1185-1', 
        'hsa-mir-1185-2', 'hsa-mir-1193', 'hsa-mir-1197', 'hsa-mir-1199', 'hsa-mir-1200', 'hsa-mir-1202', 'hsa-mir-1203', 'hsa-mir-1204', 'hsa-mir-1205', 
        'hsa-mir-1206', 'hsa-mir-1207', 'hsa-mir-1208', 'hsa-mir-12113', 'hsa-mir-12114', 'hsa-mir-12115', 'hsa-mir-12116', 'hsa-mir-12117', 'hsa-mir-12118', 
        'hsa-mir-12119', 'hsa-mir-12120', 'hsa-mir-12121', 'hsa-mir-12122', 'hsa-mir-12123', 'hsa-mir-12124', 'hsa-mir-12125', 'hsa-mir-12126', 'hsa-mir-12127', 
        'hsa-mir-12128', 'hsa-mir-12129', 'hsa-mir-12130', 'hsa-mir-12131', 'hsa-mir-12132', 'hsa-mir-12133', 'hsa-mir-12135', 'hsa-mir-12136', 'hsa-mir-122', 
        'hsa-mir-1224', 'hsa-mir-1225', 'hsa-mir-1226', 'hsa-mir-1227', 'hsa-mir-1228', 'hsa-mir-1229', 'hsa-mir-122b', 'hsa-mir-1231', 'hsa-mir-1233-1', 
        'hsa-mir-1233-2', 'hsa-mir-1234', 'hsa-mir-1236', 'hsa-mir-1237', 'hsa-mir-1238', 'hsa-mir-124-1', 'hsa-mir-124-2', 'hsa-mir-124-3', 'hsa-mir-1243', 
        'hsa-mir-1244-1', 'hsa-mir-1244-2', 'hsa-mir-1244-3', 'hsa-mir-1244-4', 'hsa-mir-1245a', 'hsa-mir-1245b', 'hsa-mir-1246', 'hsa-mir-1247', 
        'hsa-mir-1248', 'hsa-mir-1249', 'hsa-mir-1250', 'hsa-mir-1251', 'hsa-mir-1252', 'hsa-mir-1253', 'hsa-mir-1255a', 'hsa-mir-1255b-1', 'hsa-mir-1255b-2', 
        'hsa-mir-1256', 'hsa-mir-1257', 'hsa-mir-1258', 'hsa-mir-125a', 'hsa-mir-125b-1', 'hsa-mir-125b-2', 'hsa-mir-126', 'hsa-mir-1260a', 'hsa-mir-1260b', 
        'hsa-mir-1261', 'hsa-mir-1262', 'hsa-mir-1263', 'hsa-mir-1264', 'hsa-mir-1265', 'hsa-mir-1266', 'hsa-mir-1267', 'hsa-mir-1268a', 'hsa-mir-1268b', 
        'hsa-mir-1269a', 'hsa-mir-1269b', 'hsa-mir-127', 'hsa-mir-1270', 'hsa-mir-1271', 'hsa-mir-1272', 'hsa-mir-1273c', 'hsa-mir-1273h', 'hsa-mir-1275', 
        'hsa-mir-1276', 'hsa-mir-1277', 'hsa-mir-1278', 'hsa-mir-1279', 'hsa-mir-128-1', 'hsa-mir-128-2', 'hsa-mir-1281', 'hsa-mir-1282', 'hsa-mir-1283-1', 
        'hsa-mir-1283-2', 'hsa-mir-1284', 'hsa-mir-1285-1', 'hsa-mir-1285-2', 'hsa-mir-1286', 'hsa-mir-1287', 'hsa-mir-1288', 'hsa-mir-1289-1', 
        'hsa-mir-1289-2', 'hsa-mir-129-1', 'hsa-mir-129-2', 'hsa-mir-1290', 'hsa-mir-1291', 'hsa-mir-1292', 'hsa-mir-1293', 'hsa-mir-1294', 'hsa-mir-1295a', 
        'hsa-mir-1295b', 'hsa-mir-1296', 'hsa-mir-1297', 'hsa-mir-1298', 'hsa-mir-1299', 'hsa-mir-1301', 'hsa-mir-1302-1', 'hsa-mir-1302-10', 'hsa-mir-1302-11', 
        'hsa-mir-1302-2', 'hsa-mir-1302-3', 'hsa-mir-1302-4', 'hsa-mir-1302-5', 'hsa-mir-1302-6', 'hsa-mir-1302-7', 'hsa-mir-1302-8', 'hsa-mir-1302-9', 
        'hsa-mir-1303', 'hsa-mir-1304', 'hsa-mir-1305', 'hsa-mir-1306', 'hsa-mir-1307', 'hsa-mir-130a', 'hsa-mir-130b', 'hsa-mir-132', 'hsa-mir-1321', 
        'hsa-mir-1322', 'hsa-mir-1323', 'hsa-mir-1324', 'hsa-mir-133a-1', 'hsa-mir-133a-2', 'hsa-mir-133b', 'hsa-mir-134', 'hsa-mir-1343', 'hsa-mir-135a-1', 
        'hsa-mir-135a-2', 'hsa-mir-135b', 'hsa-mir-136', 'hsa-mir-137', 'hsa-mir-138-1', 'hsa-mir-138-2', 'hsa-mir-139', 'hsa-mir-140', 'hsa-mir-141', 
        'hsa-mir-142', 'hsa-mir-143', 'hsa-mir-144', 'hsa-mir-145', 'hsa-mir-1468', 'hsa-mir-1469', 'hsa-mir-146a', 'hsa-mir-146b', 'hsa-mir-1470', 
        'hsa-mir-1471', 'hsa-mir-147a', 'hsa-mir-147b', 'hsa-mir-148a', 'hsa-mir-148b', 'hsa-mir-149', 'hsa-mir-150', 'hsa-mir-151a', 'hsa-mir-151b', 
        'hsa-mir-152', 'hsa-mir-153-1', 'hsa-mir-153-2', 'hsa-mir-1537', 'hsa-mir-1538', 'hsa-mir-1539', 'hsa-mir-154', 'hsa-mir-155', 'hsa-mir-1587', 
        'hsa-mir-15a', 'hsa-mir-15b', 'hsa-mir-16-1', 'hsa-mir-16-2', 'hsa-mir-17', 'hsa-mir-181a-1', 'hsa-mir-181a-2', 'hsa-mir-181b-1', 'hsa-mir-181b-2', 
        'hsa-mir-181c', 'hsa-mir-181d', 'hsa-mir-182', 'hsa-mir-1825', 'hsa-mir-1827', 'hsa-mir-183', 'hsa-mir-184', 'hsa-mir-1843', 'hsa-mir-185', 
        'hsa-mir-186', 'hsa-mir-187', 'hsa-mir-188', 'hsa-mir-18a', 'hsa-mir-18b', 'hsa-mir-1908', 'hsa-mir-1909', 'hsa-mir-190a', 'hsa-mir-190b', 
        'hsa-mir-191', 'hsa-mir-1910', 'hsa-mir-1911', 'hsa-mir-1912', 'hsa-mir-1913', 'hsa-mir-1914', 'hsa-mir-1915', 'hsa-mir-192', 'hsa-mir-193a', 
        'hsa-mir-193b', 'hsa-mir-194-1', 'hsa-mir-194-2', 'hsa-mir-195', 'hsa-mir-196a-1', 'hsa-mir-196a-2', 'hsa-mir-196b', 'hsa-mir-197', 'hsa-mir-1972-1', 
        'hsa-mir-1972-2', 'hsa-mir-1976', 'hsa-mir-198', 'hsa-mir-199a-1', 'hsa-mir-199a-2', 'hsa-mir-199b', 'hsa-mir-19a', 'hsa-mir-19b-1', 'hsa-mir-19b-2', 
        'hsa-mir-200a', 'hsa-mir-200b', 'hsa-mir-200c', 'hsa-mir-202', 'hsa-mir-203a', 'hsa-mir-203b', 'hsa-mir-204', 'hsa-mir-205', 'hsa-mir-2052', 
        'hsa-mir-2053', 'hsa-mir-2054', 'hsa-mir-206', 'hsa-mir-208a', 'hsa-mir-208b', 'hsa-mir-20a', 'hsa-mir-20b', 'hsa-mir-21', 'hsa-mir-210', 'hsa-mir-211', 
        'hsa-mir-2110', 'hsa-mir-2113', 'hsa-mir-2114', 'hsa-mir-2115', 'hsa-mir-2116', 'hsa-mir-2117', 'hsa-mir-212', 'hsa-mir-214', 'hsa-mir-215', 
        'hsa-mir-216a', 'hsa-mir-216b', 'hsa-mir-217', 'hsa-mir-218-1', 'hsa-mir-218-2', 'hsa-mir-219a-1', 'hsa-mir-219a-2', 'hsa-mir-219b', 'hsa-mir-22', 
        'hsa-mir-221', 'hsa-mir-222', 'hsa-mir-223', 'hsa-mir-224', 'hsa-mir-2276', 'hsa-mir-2277', 'hsa-mir-2278', 'hsa-mir-2355', 'hsa-mir-2392', 
        'hsa-mir-23a', 'hsa-mir-23b', 'hsa-mir-23c', 'hsa-mir-24-1', 'hsa-mir-24-2', 'hsa-mir-2467', 'hsa-mir-25', 'hsa-mir-2681', 'hsa-mir-2682', 
        'hsa-mir-26a-1', 'hsa-mir-26a-2', 'hsa-mir-26b', 'hsa-mir-27a', 'hsa-mir-27b', 'hsa-mir-28', 'hsa-mir-2861', 'hsa-mir-2909', 'hsa-mir-296', 
        'hsa-mir-297', 'hsa-mir-298', 'hsa-mir-299', 'hsa-mir-29a', 'hsa-mir-29b-1', 'hsa-mir-29b-2', 'hsa-mir-29c', 'hsa-mir-300', 'hsa-mir-301a', 
        'hsa-mir-301b', 'hsa-mir-302a', 'hsa-mir-302b', 'hsa-mir-302c', 'hsa-mir-302d', 'hsa-mir-302e', 'hsa-mir-302f', 'hsa-mir-3059', 'hsa-mir-3064', 
        'hsa-mir-3065', 'hsa-mir-3074', 'hsa-mir-3085', 'hsa-mir-30a', 'hsa-mir-30b', 'hsa-mir-30c-1', 'hsa-mir-30c-2', 'hsa-mir-30d', 'hsa-mir-30e', 
        'hsa-mir-31', 'hsa-mir-3115', 'hsa-mir-3116-1', 'hsa-mir-3116-2', 'hsa-mir-3117', 'hsa-mir-3118-1', 'hsa-mir-3118-2', 'hsa-mir-3118-3', 
        'hsa-mir-3118-4', 'hsa-mir-3119-1', 'hsa-mir-3119-2', 'hsa-mir-3120', 'hsa-mir-3121', 'hsa-mir-3122', 'hsa-mir-3123', 'hsa-mir-3124', 'hsa-mir-3125', 
        'hsa-mir-3126', 'hsa-mir-3127', 'hsa-mir-3128', 'hsa-mir-3129', 'hsa-mir-3130-1', 'hsa-mir-3130-2', 'hsa-mir-3131', 'hsa-mir-3132', 'hsa-mir-3133', 
        'hsa-mir-3134', 'hsa-mir-3135a', 'hsa-mir-3135b', 'hsa-mir-3136', 'hsa-mir-3137', 'hsa-mir-3138', 'hsa-mir-3139', 'hsa-mir-3140', 'hsa-mir-3141', 
        'hsa-mir-3142', 'hsa-mir-3143', 'hsa-mir-3144', 'hsa-mir-3145', 'hsa-mir-3146', 'hsa-mir-3147', 'hsa-mir-3148', 'hsa-mir-3149', 'hsa-mir-3150a', 
        'hsa-mir-3150b', 'hsa-mir-3151', 'hsa-mir-3152', 'hsa-mir-3153', 'hsa-mir-3154', 'hsa-mir-3155a', 'hsa-mir-3155b', 'hsa-mir-3156-1', 'hsa-mir-3156-2', 
        'hsa-mir-3156-3', 'hsa-mir-3157', 'hsa-mir-3158-1', 'hsa-mir-3158-2', 'hsa-mir-3159', 'hsa-mir-3160-1', 'hsa-mir-3160-2', 'hsa-mir-3161', 
        'hsa-mir-3162', 'hsa-mir-3163', 'hsa-mir-3164', 'hsa-mir-3165', 'hsa-mir-3166', 'hsa-mir-3167', 'hsa-mir-3168', 'hsa-mir-3169', 'hsa-mir-3170', 
        'hsa-mir-3171', 'hsa-mir-3173', 'hsa-mir-3174', 'hsa-mir-3175', 'hsa-mir-3176', 'hsa-mir-3177', 'hsa-mir-3178', 'hsa-mir-3179-1', 'hsa-mir-3179-2', 
        'hsa-mir-3179-3', 'hsa-mir-3179-4', 'hsa-mir-3180-1', 'hsa-mir-3180-2', 'hsa-mir-3180-3', 'hsa-mir-3180-4', 'hsa-mir-3180-5', 'hsa-mir-3181', 
        'hsa-mir-3182', 'hsa-mir-3183', 'hsa-mir-3184', 'hsa-mir-3185', 'hsa-mir-3186', 'hsa-mir-3187', 'hsa-mir-3188', 'hsa-mir-3189', 'hsa-mir-3190', 
        'hsa-mir-3191', 'hsa-mir-3192', 'hsa-mir-3193', 'hsa-mir-3194', 'hsa-mir-3195', 'hsa-mir-3196', 'hsa-mir-3197', 'hsa-mir-3198-1', 'hsa-mir-3198-2', 
        'hsa-mir-3199-1', 'hsa-mir-3199-2', 'hsa-mir-32', 'hsa-mir-3200', 'hsa-mir-3201', 'hsa-mir-3202-1', 'hsa-mir-3202-2', 'hsa-mir-320a', 'hsa-mir-320b-1', 
        'hsa-mir-320b-2', 'hsa-mir-320c-1', 'hsa-mir-320c-2', 'hsa-mir-320d-1', 'hsa-mir-320d-2', 'hsa-mir-320e', 'hsa-mir-323a', 'hsa-mir-323b', 'hsa-mir-324', 
        'hsa-mir-325', 'hsa-mir-326', 'hsa-mir-328', 'hsa-mir-329-1', 'hsa-mir-329-2', 'hsa-mir-330', 'hsa-mir-331', 'hsa-mir-335', 'hsa-mir-337', 
        'hsa-mir-338', 'hsa-mir-339', 'hsa-mir-33a', 'hsa-mir-33b', 'hsa-mir-340', 'hsa-mir-342', 'hsa-mir-345', 'hsa-mir-346', 'hsa-mir-34a', 'hsa-mir-34b', 
        'hsa-mir-34c', 'hsa-mir-3529', 'hsa-mir-3605', 'hsa-mir-3606', 'hsa-mir-3609', 'hsa-mir-361', 'hsa-mir-3610', 'hsa-mir-3611', 'hsa-mir-3612', 
        'hsa-mir-3613', 'hsa-mir-3614', 'hsa-mir-3615', 'hsa-mir-3616', 'hsa-mir-3617', 'hsa-mir-3618', 'hsa-mir-3619', 'hsa-mir-362', 'hsa-mir-3620', 
        'hsa-mir-3621', 'hsa-mir-3622a', 'hsa-mir-3622b', 'hsa-mir-363', 'hsa-mir-3646', 'hsa-mir-3648-1', 'hsa-mir-3648-2', 'hsa-mir-3649', 'hsa-mir-3650', 
        'hsa-mir-3651', 'hsa-mir-3652', 'hsa-mir-3654', 'hsa-mir-3655', 'hsa-mir-3657', 'hsa-mir-3658', 'hsa-mir-3659', 'hsa-mir-365a', 'hsa-mir-365b', 
        'hsa-mir-3660', 'hsa-mir-3661', 'hsa-mir-3662', 'hsa-mir-3663', 'hsa-mir-3664', 'hsa-mir-3665', 'hsa-mir-3666', 'hsa-mir-3667', 'hsa-mir-3668', 
        'hsa-mir-367', 'hsa-mir-3670-1', 'hsa-mir-3670-2', 'hsa-mir-3670-3', 'hsa-mir-3670-4', 'hsa-mir-3671', 'hsa-mir-3672', 'hsa-mir-3674', 'hsa-mir-3675', 
        'hsa-mir-3677', 'hsa-mir-3678', 'hsa-mir-3679', 'hsa-mir-3680-1', 'hsa-mir-3680-2', 'hsa-mir-3681', 'hsa-mir-3682', 'hsa-mir-3683', 'hsa-mir-3684', 
        'hsa-mir-3685', 'hsa-mir-3686', 'hsa-mir-3688-1', 'hsa-mir-3688-2', 'hsa-mir-3689a', 'hsa-mir-3689b', 'hsa-mir-3689c', 'hsa-mir-3689d-1', 
        'hsa-mir-3689d-2', 'hsa-mir-3689e', 'hsa-mir-3689f', 'hsa-mir-369', 'hsa-mir-3690-1', 'hsa-mir-3690-2', 'hsa-mir-3691', 'hsa-mir-3692', 'hsa-mir-370', 
        'hsa-mir-3714', 'hsa-mir-371a', 'hsa-mir-371b', 'hsa-mir-372', 'hsa-mir-373', 'hsa-mir-374a', 'hsa-mir-374b', 'hsa-mir-374c', 'hsa-mir-375', 
        'hsa-mir-376a-1', 'hsa-mir-376a-2', 'hsa-mir-376b', 'hsa-mir-376c', 'hsa-mir-377', 'hsa-mir-378a', 'hsa-mir-378b', 'hsa-mir-378c', 'hsa-mir-378d-1', 
        'hsa-mir-378d-2', 'hsa-mir-378e', 'hsa-mir-378f', 'hsa-mir-378h', 'hsa-mir-378i', 'hsa-mir-378j', 'hsa-mir-379', 'hsa-mir-380', 'hsa-mir-381', 
        'hsa-mir-382', 'hsa-mir-383', 'hsa-mir-384', 'hsa-mir-3907', 'hsa-mir-3908', 'hsa-mir-3909', 'hsa-mir-3910-1', 'hsa-mir-3910-2', 'hsa-mir-3911', 
        'hsa-mir-3912', 'hsa-mir-3913-1', 'hsa-mir-3913-2', 'hsa-mir-3914-1', 'hsa-mir-3914-2', 'hsa-mir-3915', 'hsa-mir-3916', 'hsa-mir-3917', 'hsa-mir-3918', 
        'hsa-mir-3919', 'hsa-mir-3920', 'hsa-mir-3921', 'hsa-mir-3922', 'hsa-mir-3923', 'hsa-mir-3924', 'hsa-mir-3925', 'hsa-mir-3926-1', 'hsa-mir-3926-2', 
        'hsa-mir-3927', 'hsa-mir-3928', 'hsa-mir-3929', 'hsa-mir-3934', 'hsa-mir-3935', 'hsa-mir-3936', 'hsa-mir-3937', 'hsa-mir-3938', 'hsa-mir-3939', 
        'hsa-mir-3940', 'hsa-mir-3941', 'hsa-mir-3942', 'hsa-mir-3943', 'hsa-mir-3944', 'hsa-mir-3945', 'hsa-mir-3960', 'hsa-mir-3972', 'hsa-mir-3973', 
        'hsa-mir-3974', 'hsa-mir-3975', 'hsa-mir-3976', 'hsa-mir-3977', 'hsa-mir-3978', 'hsa-mir-409', 'hsa-mir-410', 'hsa-mir-411', 'hsa-mir-412', 
        'hsa-mir-421', 'hsa-mir-422a', 'hsa-mir-423', 'hsa-mir-424', 'hsa-mir-425', 'hsa-mir-4251', 'hsa-mir-4252', 'hsa-mir-4253', 'hsa-mir-4254', 
        'hsa-mir-4255', 'hsa-mir-4256', 'hsa-mir-4257', 'hsa-mir-4258', 'hsa-mir-4259', 'hsa-mir-4260', 'hsa-mir-4261', 'hsa-mir-4262', 'hsa-mir-4263', 
        'hsa-mir-4264', 'hsa-mir-4265', 'hsa-mir-4266', 'hsa-mir-4267', 'hsa-mir-4268', 'hsa-mir-4269', 'hsa-mir-4270', 'hsa-mir-4271', 'hsa-mir-4272', 
        'hsa-mir-4273', 'hsa-mir-4274', 'hsa-mir-4275', 'hsa-mir-4276', 'hsa-mir-4277', 'hsa-mir-4278', 'hsa-mir-4279', 'hsa-mir-4280', 'hsa-mir-4281', 
        'hsa-mir-4282', 'hsa-mir-4283-1', 'hsa-mir-4283-2', 'hsa-mir-4284', 'hsa-mir-4285', 'hsa-mir-4286', 'hsa-mir-4287', 'hsa-mir-4288', 'hsa-mir-4289', 
        'hsa-mir-429', 'hsa-mir-4290', 'hsa-mir-4291', 'hsa-mir-4292', 'hsa-mir-4293', 'hsa-mir-4294', 'hsa-mir-4295', 'hsa-mir-4296', 'hsa-mir-4297', 
        'hsa-mir-4298', 'hsa-mir-4299', 'hsa-mir-4300', 'hsa-mir-4301', 'hsa-mir-4302', 'hsa-mir-4303', 'hsa-mir-4304', 'hsa-mir-4305', 'hsa-mir-4306', 
        'hsa-mir-4307', 'hsa-mir-4308', 'hsa-mir-4309', 'hsa-mir-431', 'hsa-mir-4310', 'hsa-mir-4311', 'hsa-mir-4312', 'hsa-mir-4313', 'hsa-mir-4314', 
        'hsa-mir-4315-1', 'hsa-mir-4315-2', 'hsa-mir-4316', 'hsa-mir-4317', 'hsa-mir-4318', 'hsa-mir-4319', 'hsa-mir-432', 'hsa-mir-4320', 'hsa-mir-4321', 
        'hsa-mir-4322', 'hsa-mir-4323', 'hsa-mir-4324', 'hsa-mir-4325', 'hsa-mir-4326', 'hsa-mir-4327', 'hsa-mir-4328', 'hsa-mir-4329', 'hsa-mir-433', 
        'hsa-mir-4330', 'hsa-mir-4418', 'hsa-mir-4420', 'hsa-mir-4421', 'hsa-mir-4422', 'hsa-mir-4423', 'hsa-mir-4424', 'hsa-mir-4425', 'hsa-mir-4426', 
        'hsa-mir-4427', 'hsa-mir-4428', 'hsa-mir-4429', 'hsa-mir-4430', 'hsa-mir-4431', 'hsa-mir-4432', 'hsa-mir-4433a', 'hsa-mir-4433b', 'hsa-mir-4434', 
        'hsa-mir-4435-1', 'hsa-mir-4435-2', 'hsa-mir-4436a', 'hsa-mir-4436b-1', 'hsa-mir-4436b-2', 'hsa-mir-4437', 'hsa-mir-4438', 'hsa-mir-4439', 
        'hsa-mir-4440', 'hsa-mir-4441', 'hsa-mir-4442', 'hsa-mir-4443', 'hsa-mir-4444-1', 'hsa-mir-4444-2', 'hsa-mir-4445', 'hsa-mir-4446', 'hsa-mir-4447', 
        'hsa-mir-4448', 'hsa-mir-4449', 'hsa-mir-4450', 'hsa-mir-4451', 'hsa-mir-4452', 'hsa-mir-4453', 'hsa-mir-4454', 'hsa-mir-4455', 'hsa-mir-4457', 
        'hsa-mir-4458', 'hsa-mir-4460', 'hsa-mir-4462', 'hsa-mir-4463', 'hsa-mir-4464', 'hsa-mir-4465', 'hsa-mir-4466', 'hsa-mir-4467', 'hsa-mir-4468', 
        'hsa-mir-4469', 'hsa-mir-4470', 'hsa-mir-4471', 'hsa-mir-4472-1', 'hsa-mir-4472-2', 'hsa-mir-4473', 'hsa-mir-4474', 'hsa-mir-4475', 'hsa-mir-4476', 
        'hsa-mir-4478', 'hsa-mir-4479', 'hsa-mir-448', 'hsa-mir-4480', 'hsa-mir-4481', 'hsa-mir-4482', 'hsa-mir-4483', 'hsa-mir-4484', 'hsa-mir-4485', 
        'hsa-mir-4486', 'hsa-mir-4487', 'hsa-mir-4488', 'hsa-mir-4489', 'hsa-mir-4490', 'hsa-mir-4491', 'hsa-mir-4492', 'hsa-mir-4493', 'hsa-mir-4494', 
        'hsa-mir-4495', 'hsa-mir-4496', 'hsa-mir-4497', 'hsa-mir-4498', 'hsa-mir-4499', 'hsa-mir-449a', 'hsa-mir-449b', 'hsa-mir-449c', 'hsa-mir-4500', 
        'hsa-mir-4501', 'hsa-mir-4502', 'hsa-mir-4503', 'hsa-mir-4504', 'hsa-mir-4505', 'hsa-mir-4506', 'hsa-mir-4507', 'hsa-mir-4508', 'hsa-mir-4509-1', 
        'hsa-mir-4509-2', 'hsa-mir-4509-3', 'hsa-mir-450a-1', 'hsa-mir-450a-2', 'hsa-mir-450b', 'hsa-mir-4510', 'hsa-mir-4511', 'hsa-mir-4512', 'hsa-mir-4513', 
        'hsa-mir-4514', 'hsa-mir-4515', 'hsa-mir-4516', 'hsa-mir-4517', 'hsa-mir-4518', 'hsa-mir-4519', 'hsa-mir-451a', 'hsa-mir-451b', 'hsa-mir-452', 
        'hsa-mir-4520-1', 'hsa-mir-4520-2', 'hsa-mir-4521', 'hsa-mir-4522', 'hsa-mir-4523', 'hsa-mir-4524a', 'hsa-mir-4524b', 'hsa-mir-4525', 'hsa-mir-4526', 
        'hsa-mir-4527', 'hsa-mir-4528', 'hsa-mir-4529', 'hsa-mir-4530', 'hsa-mir-4531', 'hsa-mir-4533', 'hsa-mir-4534', 'hsa-mir-4535', 'hsa-mir-4536-1', 
        'hsa-mir-4536-2', 'hsa-mir-4537', 'hsa-mir-4538', 'hsa-mir-4539', 'hsa-mir-454', 'hsa-mir-4540', 'hsa-mir-455', 'hsa-mir-4632', 'hsa-mir-4633', 
        'hsa-mir-4634', 'hsa-mir-4635', 'hsa-mir-4636', 'hsa-mir-4637', 'hsa-mir-4638', 'hsa-mir-4639', 'hsa-mir-4640', 'hsa-mir-4641', 'hsa-mir-4642', 
        'hsa-mir-4643', 'hsa-mir-4644', 'hsa-mir-4645', 'hsa-mir-4646', 'hsa-mir-4647', 'hsa-mir-4648', 'hsa-mir-4649', 'hsa-mir-4650-1', 'hsa-mir-4650-2', 
        'hsa-mir-4651', 'hsa-mir-4652', 'hsa-mir-4653', 'hsa-mir-4654', 'hsa-mir-4655', 'hsa-mir-4656', 'hsa-mir-4657', 'hsa-mir-4658', 'hsa-mir-4659a', 
        'hsa-mir-4659b', 'hsa-mir-466', 'hsa-mir-4660', 'hsa-mir-4661', 'hsa-mir-4662a', 'hsa-mir-4662b', 'hsa-mir-4663', 'hsa-mir-4664', 'hsa-mir-4665', 
        'hsa-mir-4666a', 'hsa-mir-4666b', 'hsa-mir-4667', 'hsa-mir-4668', 'hsa-mir-4669', 'hsa-mir-4670', 'hsa-mir-4671', 'hsa-mir-4672', 'hsa-mir-4673', 
        'hsa-mir-4674', 'hsa-mir-4675', 'hsa-mir-4676', 'hsa-mir-4677', 'hsa-mir-4678', 'hsa-mir-4679-1', 'hsa-mir-4679-2', 'hsa-mir-4680', 'hsa-mir-4681', 
        'hsa-mir-4682', 'hsa-mir-4683', 'hsa-mir-4684', 'hsa-mir-4685', 'hsa-mir-4686', 'hsa-mir-4687', 'hsa-mir-4688', 'hsa-mir-4689', 'hsa-mir-4690', 
        'hsa-mir-4691', 'hsa-mir-4692', 'hsa-mir-4693', 'hsa-mir-4694', 'hsa-mir-4695', 'hsa-mir-4696', 'hsa-mir-4697', 'hsa-mir-4698', 'hsa-mir-4699', 
        'hsa-mir-4700', 'hsa-mir-4701', 'hsa-mir-4703', 'hsa-mir-4704', 'hsa-mir-4705', 'hsa-mir-4706', 'hsa-mir-4707', 'hsa-mir-4708', 'hsa-mir-4709', 
        'hsa-mir-4710', 'hsa-mir-4711', 'hsa-mir-4712', 'hsa-mir-4713', 'hsa-mir-4714', 'hsa-mir-4715', 'hsa-mir-4716', 'hsa-mir-4717', 'hsa-mir-4718', 
        'hsa-mir-4719', 'hsa-mir-4720', 'hsa-mir-4721', 'hsa-mir-4722', 'hsa-mir-4723', 'hsa-mir-4724', 'hsa-mir-4725', 'hsa-mir-4726', 'hsa-mir-4727', 
        'hsa-mir-4728', 'hsa-mir-4729', 'hsa-mir-4730', 'hsa-mir-4731', 'hsa-mir-4732', 'hsa-mir-4733', 'hsa-mir-4734', 'hsa-mir-4735', 'hsa-mir-4736', 
        'hsa-mir-4737', 'hsa-mir-4738', 'hsa-mir-4739', 'hsa-mir-4740', 'hsa-mir-4741', 'hsa-mir-4742', 'hsa-mir-4743', 'hsa-mir-4744', 'hsa-mir-4745', 
        'hsa-mir-4746', 'hsa-mir-4747', 'hsa-mir-4748', 'hsa-mir-4749', 'hsa-mir-4750', 'hsa-mir-4751', 'hsa-mir-4752', 'hsa-mir-4753', 'hsa-mir-4754', 
        'hsa-mir-4755', 'hsa-mir-4756', 'hsa-mir-4757', 'hsa-mir-4758', 'hsa-mir-4759', 'hsa-mir-4760', 'hsa-mir-4761', 'hsa-mir-4762', 'hsa-mir-4763', 
        'hsa-mir-4764', 'hsa-mir-4765', 'hsa-mir-4766', 'hsa-mir-4767', 'hsa-mir-4768', 'hsa-mir-4769', 'hsa-mir-4770', 'hsa-mir-4771-1', 'hsa-mir-4771-2', 
        'hsa-mir-4772', 'hsa-mir-4773-1', 'hsa-mir-4773-2', 'hsa-mir-4774', 'hsa-mir-4775', 'hsa-mir-4776-1', 'hsa-mir-4776-2', 'hsa-mir-4777', 'hsa-mir-4778', 
        'hsa-mir-4779', 'hsa-mir-4780', 'hsa-mir-4781', 'hsa-mir-4782', 'hsa-mir-4783', 'hsa-mir-4784', 'hsa-mir-4785', 'hsa-mir-4786', 'hsa-mir-4787', 
        'hsa-mir-4788', 'hsa-mir-4789', 'hsa-mir-4790', 'hsa-mir-4791', 'hsa-mir-4793', 'hsa-mir-4794', 'hsa-mir-4795', 'hsa-mir-4796', 'hsa-mir-4797', 
        'hsa-mir-4798', 'hsa-mir-4799', 'hsa-mir-4800', 'hsa-mir-4801', 'hsa-mir-4802', 'hsa-mir-4803', 'hsa-mir-4804', 'hsa-mir-483', 'hsa-mir-484', 
        'hsa-mir-485', 'hsa-mir-486-1', 'hsa-mir-486-2', 'hsa-mir-487a', 'hsa-mir-487b', 'hsa-mir-488', 'hsa-mir-489', 'hsa-mir-490', 'hsa-mir-491', 
        'hsa-mir-492', 'hsa-mir-493', 'hsa-mir-494', 'hsa-mir-495', 'hsa-mir-496', 'hsa-mir-497', 'hsa-mir-498', 'hsa-mir-4999', 'hsa-mir-499a', 'hsa-mir-499b', 
        'hsa-mir-5000', 'hsa-mir-5001', 'hsa-mir-5002', 'hsa-mir-5003', 'hsa-mir-5004', 'hsa-mir-5006', 'hsa-mir-5007', 'hsa-mir-5008', 'hsa-mir-5009', 
        'hsa-mir-500a', 'hsa-mir-500b', 'hsa-mir-501', 'hsa-mir-5010', 'hsa-mir-5011', 'hsa-mir-502', 'hsa-mir-503', 'hsa-mir-504', 'hsa-mir-5047', 
        'hsa-mir-505', 'hsa-mir-506', 'hsa-mir-507', 'hsa-mir-508', 'hsa-mir-5087', 'hsa-mir-5088', 'hsa-mir-5089', 'hsa-mir-509-1', 'hsa-mir-509-2', 
        'hsa-mir-509-3', 'hsa-mir-5090', 'hsa-mir-5091', 'hsa-mir-5092', 'hsa-mir-5093', 'hsa-mir-5094', 'hsa-mir-510', 'hsa-mir-5100', 'hsa-mir-511', 
        'hsa-mir-512-1', 'hsa-mir-512-2', 'hsa-mir-513a-1', 'hsa-mir-513a-2', 'hsa-mir-513b', 'hsa-mir-513c', 'hsa-mir-514a-1', 'hsa-mir-514a-2', 
        'hsa-mir-514a-3', 'hsa-mir-514b', 'hsa-mir-515-1', 'hsa-mir-515-2', 'hsa-mir-516a-1', 'hsa-mir-516a-2', 'hsa-mir-516b-1', 'hsa-mir-516b-2', 
        'hsa-mir-517a', 'hsa-mir-517b', 'hsa-mir-517c', 'hsa-mir-5186', 'hsa-mir-5187', 'hsa-mir-5188', 'hsa-mir-5189', 'hsa-mir-518a-1', 'hsa-mir-518a-2', 
        'hsa-mir-518b', 'hsa-mir-518c', 'hsa-mir-518d', 'hsa-mir-518e', 'hsa-mir-518f', 'hsa-mir-5190', 'hsa-mir-5191', 'hsa-mir-5192', 'hsa-mir-5193', 
        'hsa-mir-5194', 'hsa-mir-5195', 'hsa-mir-5196', 'hsa-mir-5197', 'hsa-mir-519a-1', 'hsa-mir-519a-2', 'hsa-mir-519b', 'hsa-mir-519c', 'hsa-mir-519d', 
        'hsa-mir-519e', 'hsa-mir-520a', 'hsa-mir-520b', 'hsa-mir-520c', 'hsa-mir-520d', 'hsa-mir-520e', 'hsa-mir-520f', 'hsa-mir-520g', 'hsa-mir-520h', 
        'hsa-mir-521-1', 'hsa-mir-521-2', 'hsa-mir-522', 'hsa-mir-523', 'hsa-mir-524', 'hsa-mir-525', 'hsa-mir-526a-1', 'hsa-mir-526a-2', 'hsa-mir-526b', 
        'hsa-mir-527', 'hsa-mir-532', 'hsa-mir-539', 'hsa-mir-541', 'hsa-mir-542', 'hsa-mir-543', 'hsa-mir-544a', 'hsa-mir-544b', 'hsa-mir-545', 
        'hsa-mir-548a-1', 'hsa-mir-548a-2', 'hsa-mir-548a-3', 'hsa-mir-548aa-1', 'hsa-mir-548aa-2', 'hsa-mir-548ab', 'hsa-mir-548ac', 'hsa-mir-548ad', 
        'hsa-mir-548ae-1', 'hsa-mir-548ae-2', 'hsa-mir-548ag-1', 'hsa-mir-548ag-2', 'hsa-mir-548ah', 'hsa-mir-548ai', 'hsa-mir-548aj-1', 'hsa-mir-548aj-2', 
        'hsa-mir-548ak', 'hsa-mir-548al', 'hsa-mir-548am', 'hsa-mir-548an', 'hsa-mir-548ao', 'hsa-mir-548ap', 'hsa-mir-548aq', 'hsa-mir-548ar', 
        'hsa-mir-548as', 'hsa-mir-548at', 'hsa-mir-548au', 'hsa-mir-548av', 'hsa-mir-548aw', 'hsa-mir-548ax', 'hsa-mir-548ay', 'hsa-mir-548az', 'hsa-mir-548b', 
        'hsa-mir-548ba', 'hsa-mir-548bb', 'hsa-mir-548bc', 'hsa-mir-548c', 'hsa-mir-548d-1', 'hsa-mir-548d-2', 'hsa-mir-548e', 'hsa-mir-548f-1', 
        'hsa-mir-548f-2', 'hsa-mir-548f-3', 'hsa-mir-548f-4', 'hsa-mir-548f-5', 'hsa-mir-548g', 'hsa-mir-548h-1', 'hsa-mir-548h-2', 'hsa-mir-548h-3', 
        'hsa-mir-548h-4', 'hsa-mir-548h-5', 'hsa-mir-548i-1', 'hsa-mir-548i-2', 'hsa-mir-548i-3', 'hsa-mir-548i-4', 'hsa-mir-548j', 'hsa-mir-548k', 
        'hsa-mir-548l', 'hsa-mir-548m', 'hsa-mir-548n', 'hsa-mir-548o', 'hsa-mir-548o-2', 'hsa-mir-548p', 'hsa-mir-548q', 'hsa-mir-548s', 'hsa-mir-548t', 
        'hsa-mir-548u', 'hsa-mir-548v', 'hsa-mir-548w', 'hsa-mir-548x', 'hsa-mir-548x-2', 'hsa-mir-548y', 'hsa-mir-548z', 'hsa-mir-549a', 'hsa-mir-550a-1', 
        'hsa-mir-550a-2', 'hsa-mir-550a-3', 'hsa-mir-550b-1', 'hsa-mir-550b-2', 'hsa-mir-551a', 'hsa-mir-551b', 'hsa-mir-552', 'hsa-mir-553', 'hsa-mir-554', 
        'hsa-mir-555', 'hsa-mir-556', 'hsa-mir-557', 'hsa-mir-5571', 'hsa-mir-5572', 'hsa-mir-5579', 'hsa-mir-558', 'hsa-mir-5580', 'hsa-mir-5581', 
        'hsa-mir-5582', 'hsa-mir-5583-1', 'hsa-mir-5583-2', 'hsa-mir-5584', 'hsa-mir-5585', 'hsa-mir-5586', 'hsa-mir-5587', 'hsa-mir-5588', 'hsa-mir-5589', 
        'hsa-mir-559', 'hsa-mir-5590', 'hsa-mir-5591', 'hsa-mir-561', 'hsa-mir-562', 'hsa-mir-563', 'hsa-mir-564', 'hsa-mir-567', 'hsa-mir-568', 
        'hsa-mir-5680', 'hsa-mir-5681a', 'hsa-mir-5681b', 'hsa-mir-5682', 'hsa-mir-5683', 'hsa-mir-5684', 'hsa-mir-5685', 'hsa-mir-5687', 'hsa-mir-5688', 
        'hsa-mir-5689', 'hsa-mir-569', 'hsa-mir-5690', 'hsa-mir-5691', 'hsa-mir-5692a-1', 'hsa-mir-5692a-2', 'hsa-mir-5692b', 'hsa-mir-5692c-1', 
        'hsa-mir-5692c-2', 'hsa-mir-5693', 'hsa-mir-5694', 'hsa-mir-5695', 'hsa-mir-5696', 'hsa-mir-5697', 'hsa-mir-5698', 'hsa-mir-5699', 'hsa-mir-570', 
        'hsa-mir-5700', 'hsa-mir-5701-1', 'hsa-mir-5701-2', 'hsa-mir-5701-3', 'hsa-mir-5702', 'hsa-mir-5703', 'hsa-mir-5704', 'hsa-mir-5705', 'hsa-mir-5706', 
        'hsa-mir-5707', 'hsa-mir-5708', 'hsa-mir-571', 'hsa-mir-572', 'hsa-mir-573', 'hsa-mir-5739', 'hsa-mir-574', 'hsa-mir-575', 'hsa-mir-576', 
        'hsa-mir-577', 'hsa-mir-578', 'hsa-mir-5787', 'hsa-mir-579', 'hsa-mir-580', 'hsa-mir-581', 'hsa-mir-582', 'hsa-mir-583', 'hsa-mir-584', 'hsa-mir-585', 
        'hsa-mir-586', 'hsa-mir-587', 'hsa-mir-588', 'hsa-mir-589', 'hsa-mir-590', 'hsa-mir-591', 'hsa-mir-592', 'hsa-mir-593', 'hsa-mir-595', 'hsa-mir-596', 
        'hsa-mir-597', 'hsa-mir-598', 'hsa-mir-599', 'hsa-mir-600', 'hsa-mir-601', 'hsa-mir-602', 'hsa-mir-603', 'hsa-mir-604', 'hsa-mir-605', 'hsa-mir-606', 
        'hsa-mir-6068', 'hsa-mir-6069', 'hsa-mir-607', 'hsa-mir-6070', 'hsa-mir-6071', 'hsa-mir-6072', 'hsa-mir-6073', 'hsa-mir-6074', 'hsa-mir-6075', 
        'hsa-mir-6076', 'hsa-mir-6077', 'hsa-mir-6078', 'hsa-mir-6079', 'hsa-mir-608', 'hsa-mir-6080', 'hsa-mir-6081', 'hsa-mir-6082', 'hsa-mir-6083', 
        'hsa-mir-6084', 'hsa-mir-6085', 'hsa-mir-6086', 'hsa-mir-6088', 'hsa-mir-6089-1', 'hsa-mir-6089-2', 'hsa-mir-609', 'hsa-mir-6090', 'hsa-mir-610', 
        'hsa-mir-611', 'hsa-mir-612', 'hsa-mir-6124', 'hsa-mir-6125', 'hsa-mir-6126', 'hsa-mir-6127', 'hsa-mir-6128', 'hsa-mir-6129', 'hsa-mir-613', 
        'hsa-mir-6130', 'hsa-mir-6131', 'hsa-mir-6132', 'hsa-mir-6133', 'hsa-mir-6134', 'hsa-mir-614', 'hsa-mir-615', 'hsa-mir-616', 'hsa-mir-6165', 
        'hsa-mir-617', 'hsa-mir-618', 'hsa-mir-619', 'hsa-mir-620', 'hsa-mir-621', 'hsa-mir-622', 'hsa-mir-623', 'hsa-mir-624', 'hsa-mir-625', 'hsa-mir-626', 
        'hsa-mir-627', 'hsa-mir-628', 'hsa-mir-629', 'hsa-mir-630', 'hsa-mir-631', 'hsa-mir-632', 'hsa-mir-633', 'hsa-mir-634', 'hsa-mir-635', 'hsa-mir-636', 
        'hsa-mir-637', 'hsa-mir-638', 'hsa-mir-639', 'hsa-mir-640', 'hsa-mir-641', 'hsa-mir-642a', 'hsa-mir-642b', 'hsa-mir-643', 'hsa-mir-644a', 
        'hsa-mir-645', 'hsa-mir-646', 'hsa-mir-647', 'hsa-mir-648', 'hsa-mir-649', 'hsa-mir-6499', 'hsa-mir-650', 'hsa-mir-6500', 'hsa-mir-6501', 
        'hsa-mir-6502', 'hsa-mir-6503', 'hsa-mir-6504', 'hsa-mir-6505', 'hsa-mir-6506', 'hsa-mir-6507', 'hsa-mir-6508', 'hsa-mir-6509', 'hsa-mir-651', 
        'hsa-mir-6510', 'hsa-mir-6511a-1', 'hsa-mir-6511a-2', 'hsa-mir-6511a-3', 'hsa-mir-6511a-4', 'hsa-mir-6511b-1', 'hsa-mir-6511b-2', 'hsa-mir-6512', 
        'hsa-mir-6513', 'hsa-mir-6514', 'hsa-mir-6515', 'hsa-mir-6516', 'hsa-mir-652', 'hsa-mir-6529', 'hsa-mir-653', 'hsa-mir-654', 'hsa-mir-655', 
        'hsa-mir-656', 'hsa-mir-657', 'hsa-mir-658', 'hsa-mir-659', 'hsa-mir-660', 'hsa-mir-661', 'hsa-mir-662', 'hsa-mir-663a', 'hsa-mir-663b', 
        'hsa-mir-664a', 'hsa-mir-664b', 'hsa-mir-665', 'hsa-mir-668', 'hsa-mir-670', 'hsa-mir-671', 'hsa-mir-6715a', 'hsa-mir-6715b', 'hsa-mir-6716', 
        'hsa-mir-6717', 'hsa-mir-6718', 'hsa-mir-6719', 'hsa-mir-6720', 'hsa-mir-6721', 'hsa-mir-6722', 'hsa-mir-6724-1', 'hsa-mir-6724-2', 'hsa-mir-6724-3', 
        'hsa-mir-6724-4', 'hsa-mir-6726', 'hsa-mir-6727', 'hsa-mir-6728', 'hsa-mir-6729', 'hsa-mir-6730', 'hsa-mir-6731', 'hsa-mir-6732', 'hsa-mir-6733', 
        'hsa-mir-6734', 'hsa-mir-6735', 'hsa-mir-6736', 'hsa-mir-6737', 'hsa-mir-6738', 'hsa-mir-6739', 'hsa-mir-6740', 'hsa-mir-6741', 'hsa-mir-6742', 
        'hsa-mir-6743', 'hsa-mir-6744', 'hsa-mir-6745', 'hsa-mir-6746', 'hsa-mir-6747', 'hsa-mir-6748', 'hsa-mir-6749', 'hsa-mir-675', 'hsa-mir-6750', 
        'hsa-mir-6751', 'hsa-mir-6752', 'hsa-mir-6753', 'hsa-mir-6754', 'hsa-mir-6755', 'hsa-mir-6756', 'hsa-mir-6757', 'hsa-mir-6758', 'hsa-mir-6759', 
        'hsa-mir-676', 'hsa-mir-6760', 'hsa-mir-6761', 'hsa-mir-6762', 'hsa-mir-6763', 'hsa-mir-6764', 'hsa-mir-6765', 'hsa-mir-6766', 'hsa-mir-6767', 
        'hsa-mir-6768', 'hsa-mir-6769a', 'hsa-mir-6769b', 'hsa-mir-6770-1', 'hsa-mir-6770-2', 'hsa-mir-6770-3', 'hsa-mir-6771', 'hsa-mir-6772', 'hsa-mir-6773', 
        'hsa-mir-6774', 'hsa-mir-6775', 'hsa-mir-6776', 'hsa-mir-6777', 'hsa-mir-6778', 'hsa-mir-6779', 'hsa-mir-6780a', 'hsa-mir-6780b', 'hsa-mir-6781', 
        'hsa-mir-6782', 'hsa-mir-6783', 'hsa-mir-6784', 'hsa-mir-6785', 'hsa-mir-6786', 'hsa-mir-6787', 'hsa-mir-6788', 'hsa-mir-6789', 'hsa-mir-6790', 
        'hsa-mir-6791', 'hsa-mir-6792', 'hsa-mir-6793', 'hsa-mir-6794', 'hsa-mir-6795', 'hsa-mir-6796', 'hsa-mir-6797', 'hsa-mir-6798', 'hsa-mir-6799', 
        'hsa-mir-6800', 'hsa-mir-6801', 'hsa-mir-6802', 'hsa-mir-6803', 'hsa-mir-6804', 'hsa-mir-6805', 'hsa-mir-6806', 'hsa-mir-6807', 'hsa-mir-6808', 
        'hsa-mir-6809', 'hsa-mir-6810', 'hsa-mir-6811', 'hsa-mir-6812', 'hsa-mir-6813', 'hsa-mir-6814', 'hsa-mir-6815', 'hsa-mir-6816', 'hsa-mir-6817', 
        'hsa-mir-6818', 'hsa-mir-6819', 'hsa-mir-6820', 'hsa-mir-6821', 'hsa-mir-6822', 'hsa-mir-6823', 'hsa-mir-6824', 'hsa-mir-6825', 'hsa-mir-6826', 
        'hsa-mir-6827', 'hsa-mir-6828', 'hsa-mir-6829', 'hsa-mir-6830', 'hsa-mir-6831', 'hsa-mir-6832', 'hsa-mir-6833', 'hsa-mir-6834', 'hsa-mir-6835', 
        'hsa-mir-6836', 'hsa-mir-6837', 'hsa-mir-6838', 'hsa-mir-6839', 'hsa-mir-6840', 'hsa-mir-6841', 'hsa-mir-6842', 'hsa-mir-6843', 'hsa-mir-6844', 
        'hsa-mir-6845', 'hsa-mir-6846', 'hsa-mir-6847', 'hsa-mir-6848', 'hsa-mir-6849', 'hsa-mir-6850', 'hsa-mir-6851', 'hsa-mir-6852', 'hsa-mir-6853', 
        'hsa-mir-6854', 'hsa-mir-6855', 'hsa-mir-6856', 'hsa-mir-6857', 'hsa-mir-6858', 'hsa-mir-6859-1', 'hsa-mir-6859-2', 'hsa-mir-6859-3', 'hsa-mir-6859-4', 
        'hsa-mir-6860', 'hsa-mir-6861', 'hsa-mir-6862-1', 'hsa-mir-6862-2', 'hsa-mir-6863', 'hsa-mir-6864', 'hsa-mir-6865', 'hsa-mir-6866', 'hsa-mir-6867', 
        'hsa-mir-6868', 'hsa-mir-6869', 'hsa-mir-6870', 'hsa-mir-6871', 'hsa-mir-6872', 'hsa-mir-6873', 'hsa-mir-6874', 'hsa-mir-6875', 'hsa-mir-6876', 
        'hsa-mir-6877', 'hsa-mir-6878', 'hsa-mir-6879', 'hsa-mir-6880', 'hsa-mir-6881', 'hsa-mir-6882', 'hsa-mir-6883', 'hsa-mir-6884', 'hsa-mir-6885', 
        'hsa-mir-6886', 'hsa-mir-6887', 'hsa-mir-6888', 'hsa-mir-6889', 'hsa-mir-6890', 'hsa-mir-6891', 'hsa-mir-6892', 'hsa-mir-6893', 'hsa-mir-6894', 
        'hsa-mir-6895', 'hsa-mir-7-1', 'hsa-mir-7-2', 'hsa-mir-7-3', 'hsa-mir-708', 'hsa-mir-7106', 'hsa-mir-7107', 'hsa-mir-7108', 'hsa-mir-7109', 
        'hsa-mir-711', 'hsa-mir-7110', 'hsa-mir-7111', 'hsa-mir-7112', 'hsa-mir-7113', 'hsa-mir-7114', 'hsa-mir-7150', 'hsa-mir-7151', 'hsa-mir-7152', 
        'hsa-mir-7153', 'hsa-mir-7154', 'hsa-mir-7155', 'hsa-mir-7156', 'hsa-mir-7157', 'hsa-mir-7158', 'hsa-mir-7159', 'hsa-mir-7160', 'hsa-mir-7161', 
        'hsa-mir-7162', 'hsa-mir-718', 'hsa-mir-744', 'hsa-mir-7515', 'hsa-mir-758', 'hsa-mir-759', 'hsa-mir-760', 'hsa-mir-761', 'hsa-mir-762', 'hsa-mir-764', 
        'hsa-mir-765', 'hsa-mir-766', 'hsa-mir-767', 'hsa-mir-769', 'hsa-mir-770', 'hsa-mir-7702', 'hsa-mir-7703', 'hsa-mir-7704', 'hsa-mir-7705', 
        'hsa-mir-7706', 'hsa-mir-7843', 'hsa-mir-7844', 'hsa-mir-7845', 'hsa-mir-7846', 'hsa-mir-7847', 'hsa-mir-7848', 'hsa-mir-7849', 'hsa-mir-7850', 
        'hsa-mir-7851', 'hsa-mir-7852', 'hsa-mir-7853', 'hsa-mir-7854', 'hsa-mir-7855', 'hsa-mir-7856', 'hsa-mir-7973-1', 'hsa-mir-7973-2', 'hsa-mir-7974', 
        'hsa-mir-7975', 'hsa-mir-7976', 'hsa-mir-7977', 'hsa-mir-7978', 'hsa-mir-802', 'hsa-mir-8052', 'hsa-mir-8053', 'hsa-mir-8054', 'hsa-mir-8055', 
        'hsa-mir-8056', 'hsa-mir-8057', 'hsa-mir-8058', 'hsa-mir-8059', 'hsa-mir-8060', 'hsa-mir-8061', 'hsa-mir-8062', 'hsa-mir-8063', 'hsa-mir-8064', 
        'hsa-mir-8065', 'hsa-mir-8066', 'hsa-mir-8067', 'hsa-mir-8068', 'hsa-mir-8069-1', 'hsa-mir-8069-2', 'hsa-mir-8070', 'hsa-mir-8071-1', 'hsa-mir-8071-2', 
        'hsa-mir-8072', 'hsa-mir-8073', 'hsa-mir-8074', 'hsa-mir-8075', 'hsa-mir-8076', 'hsa-mir-8077', 'hsa-mir-8078', 'hsa-mir-8079', 'hsa-mir-8080', 
        'hsa-mir-8081', 'hsa-mir-8082', 'hsa-mir-8083', 'hsa-mir-8084', 'hsa-mir-8085', 'hsa-mir-8086', 'hsa-mir-8087', 'hsa-mir-8088', 'hsa-mir-8089', 
        'hsa-mir-8485', 'hsa-mir-873', 'hsa-mir-874', 'hsa-mir-875', 'hsa-mir-876', 'hsa-mir-877', 'hsa-mir-885', 'hsa-mir-887', 'hsa-mir-888', 'hsa-mir-889', 
        'hsa-mir-890', 'hsa-mir-891a', 'hsa-mir-891b', 'hsa-mir-892a', 'hsa-mir-892b', 'hsa-mir-892c', 'hsa-mir-9-1', 'hsa-mir-9-2', 'hsa-mir-9-3', 
        'hsa-mir-920', 'hsa-mir-921', 'hsa-mir-922', 'hsa-mir-924', 'hsa-mir-92a-1', 'hsa-mir-92a-2', 'hsa-mir-92b', 'hsa-mir-93', 'hsa-mir-933', 
        'hsa-mir-934', 'hsa-mir-935', 'hsa-mir-936', 'hsa-mir-937', 'hsa-mir-938', 'hsa-mir-939', 'hsa-mir-940', 'hsa-mir-941-1', 'hsa-mir-941-2', 
        'hsa-mir-941-3', 'hsa-mir-941-4', 'hsa-mir-941-5', 'hsa-mir-942', 'hsa-mir-943', 'hsa-mir-944', 'hsa-mir-95', 'hsa-mir-9500', 'hsa-mir-96', 
        'hsa-mir-9718', 'hsa-mir-98', 'hsa-mir-9851', 'hsa-mir-9898', 'hsa-mir-9899', 'hsa-mir-9900', 'hsa-mir-9901', 'hsa-mir-9902-1', 'hsa-mir-9902-2', 
        'hsa-mir-9903', 'hsa-mir-9983', 'hsa-mir-9985', 'hsa-mir-9986', 'hsa-mir-99a', 'hsa-mir-99b'
    ],
    mouse: [
        'mmu-let-7a-1', 'mmu-let-7a-2', 'mmu-let-7b', 'mmu-let-7c-1', 'mmu-let-7c-2', 'mmu-let-7d', 'mmu-let-7e', 'mmu-let-7f-1', 'mmu-let-7f-2', 'mmu-let-7g', 
        'mmu-let-7i', 'mmu-let-7j', 'mmu-let-7k', 'mmu-mir-100', 'mmu-mir-101a', 'mmu-mir-101b', 'mmu-mir-101c', 'mmu-mir-103-1', 'mmu-mir-103-2', 
        'mmu-mir-105', 'mmu-mir-106a', 'mmu-mir-106b', 'mmu-mir-107', 'mmu-mir-10a', 'mmu-mir-10b', 'mmu-mir-1187', 'mmu-mir-1188', 'mmu-mir-1190', 
        'mmu-mir-1191a', 'mmu-mir-1191b', 'mmu-mir-1192', 'mmu-mir-1193', 'mmu-mir-1195', 'mmu-mir-1197', 'mmu-mir-1198', 'mmu-mir-1199', 'mmu-mir-12178', 
        'mmu-mir-12179', 'mmu-mir-12180', 'mmu-mir-12181', 'mmu-mir-12182', 'mmu-mir-12183', 'mmu-mir-12184', 'mmu-mir-12185', 'mmu-mir-12186', 'mmu-mir-12186', 
        'mmu-mir-12187', 'mmu-mir-12188', 'mmu-mir-12189', 'mmu-mir-12190', 'mmu-mir-12191', 'mmu-mir-12192', 'mmu-mir-12193', 'mmu-mir-12194', 'mmu-mir-12195', 
        'mmu-mir-12196', 'mmu-mir-12197', 'mmu-mir-12198', 'mmu-mir-12199', 'mmu-mir-122', 'mmu-mir-12200', 'mmu-mir-12201', 'mmu-mir-12202', 'mmu-mir-12203', 
        'mmu-mir-12204', 'mmu-mir-12205', 'mmu-mir-12206', 'mmu-mir-1224', 'mmu-mir-122b', 'mmu-mir-1231', 'mmu-mir-124-1', 'mmu-mir-124-2', 'mmu-mir-124-3', 
        'mmu-mir-1247', 'mmu-mir-1249', 'mmu-mir-124b', 'mmu-mir-1251', 'mmu-mir-1258', 'mmu-mir-125a', 'mmu-mir-125b-1', 'mmu-mir-125b-2', 'mmu-mir-1264', 
        'mmu-mir-126a', 'mmu-mir-126b', 'mmu-mir-127', 'mmu-mir-1271', 'mmu-mir-128-1', 'mmu-mir-128-2', 'mmu-mir-129-1', 'mmu-mir-129-2', 'mmu-mir-1291', 
        'mmu-mir-1298', 'mmu-mir-129b', 'mmu-mir-1306', 'mmu-mir-130a', 'mmu-mir-130b', 'mmu-mir-130c', 'mmu-mir-132', 'mmu-mir-133a-1', 'mmu-mir-133a-2', 
        'mmu-mir-133b', 'mmu-mir-133c', 'mmu-mir-134', 'mmu-mir-135a-1', 'mmu-mir-135a-2', 'mmu-mir-135b', 'mmu-mir-136', 'mmu-mir-137', 'mmu-mir-138-1', 
        'mmu-mir-138-2', 'mmu-mir-139', 'mmu-mir-140', 'mmu-mir-141', 'mmu-mir-142a', 'mmu-mir-142b', 'mmu-mir-143', 'mmu-mir-144', 'mmu-mir-145a', 
        'mmu-mir-145b', 'mmu-mir-146a', 'mmu-mir-146b', 'mmu-mir-147', 'mmu-mir-148a', 'mmu-mir-148b', 'mmu-mir-149', 'mmu-mir-150', 'mmu-mir-151', 
        'mmu-mir-152', 'mmu-mir-153', 'mmu-mir-154', 'mmu-mir-155', 'mmu-mir-15a', 'mmu-mir-15b', 'mmu-mir-16-1', 'mmu-mir-16-2', 'mmu-mir-1668', 'mmu-mir-17', 
        'mmu-mir-181a-1', 'mmu-mir-181a-2', 'mmu-mir-181b-1', 'mmu-mir-181b-2', 'mmu-mir-181c', 'mmu-mir-181d', 'mmu-mir-182', 'mmu-mir-183', 'mmu-mir-1839', 
        'mmu-mir-184', 'mmu-mir-1843a', 'mmu-mir-1843b', 'mmu-mir-185', 'mmu-mir-186', 'mmu-mir-187', 'mmu-mir-188', 'mmu-mir-1892', 'mmu-mir-1893', 
        'mmu-mir-1894', 'mmu-mir-1895', 'mmu-mir-1896', 'mmu-mir-1897', 'mmu-mir-1898', 'mmu-mir-1899', 'mmu-mir-18a', 'mmu-mir-18b', 'mmu-mir-1900', 
        'mmu-mir-1901', 'mmu-mir-1902', 'mmu-mir-1903', 'mmu-mir-1904', 'mmu-mir-1905', 'mmu-mir-1906-1', 'mmu-mir-1906-2', 'mmu-mir-1907', 'mmu-mir-190a', 
        'mmu-mir-190b', 'mmu-mir-191', 'mmu-mir-1911', 'mmu-mir-1912', 'mmu-mir-192', 'mmu-mir-1927', 'mmu-mir-1928', 'mmu-mir-1929', 'mmu-mir-1930', 
        'mmu-mir-1931', 'mmu-mir-1932', 'mmu-mir-1933', 'mmu-mir-1934', 'mmu-mir-1936', 'mmu-mir-1938', 'mmu-mir-193a', 'mmu-mir-193b', 'mmu-mir-194-1', 
        'mmu-mir-194-2', 'mmu-mir-1941', 'mmu-mir-1942', 'mmu-mir-1943', 'mmu-mir-1945', 'mmu-mir-1946a', 'mmu-mir-1946b', 'mmu-mir-1947', 'mmu-mir-1948', 
        'mmu-mir-1949', 'mmu-mir-1950', 'mmu-mir-1951', 'mmu-mir-1952', 'mmu-mir-1953', 'mmu-mir-1954', 'mmu-mir-1955', 'mmu-mir-1956', 'mmu-mir-1958', 
        'mmu-mir-195a', 'mmu-mir-195b', 'mmu-mir-1960', 'mmu-mir-1961', 'mmu-mir-1962', 'mmu-mir-1963', 'mmu-mir-1964', 'mmu-mir-1966', 'mmu-mir-1967', 
        'mmu-mir-1968', 'mmu-mir-1969', 'mmu-mir-196a-1', 'mmu-mir-196a-2', 'mmu-mir-196b', 'mmu-mir-1970', 'mmu-mir-1970b', 'mmu-mir-1970c', 'mmu-mir-1971', 
        'mmu-mir-1981', 'mmu-mir-1982', 'mmu-mir-1983', 'mmu-mir-199a-1', 'mmu-mir-199a-2', 'mmu-mir-199b', 'mmu-mir-19a', 'mmu-mir-19b-1', 'mmu-mir-19b-2', 
        'mmu-mir-1a-1', 'mmu-mir-1a-2', 'mmu-mir-1b', 'mmu-mir-200a', 'mmu-mir-200b', 'mmu-mir-200c', 'mmu-mir-201', 'mmu-mir-202', 'mmu-mir-203', 
        'mmu-mir-203b', 'mmu-mir-204', 'mmu-mir-205', 'mmu-mir-206', 'mmu-mir-207', 'mmu-mir-208a', 'mmu-mir-208b', 'mmu-mir-20a', 'mmu-mir-20b', 'mmu-mir-210', 
        'mmu-mir-211', 'mmu-mir-212', 'mmu-mir-2136', 'mmu-mir-2137', 'mmu-mir-2139', 'mmu-mir-214', 'mmu-mir-215', 'mmu-mir-216a', 'mmu-mir-216b', 
        'mmu-mir-216c', 'mmu-mir-217', 'mmu-mir-218-1', 'mmu-mir-218-2', 'mmu-mir-219a-1', 'mmu-mir-219a-2', 'mmu-mir-219b', 'mmu-mir-219c', 'mmu-mir-21a', 
        'mmu-mir-21b', 'mmu-mir-21c', 'mmu-mir-22', 'mmu-mir-221', 'mmu-mir-222', 'mmu-mir-223', 'mmu-mir-224', 'mmu-mir-23a', 'mmu-mir-23b', 'mmu-mir-24-1', 
        'mmu-mir-24-2', 'mmu-mir-25', 'mmu-mir-26a-1', 'mmu-mir-26a-2', 'mmu-mir-26b', 'mmu-mir-27a', 'mmu-mir-27b', 'mmu-mir-2861', 'mmu-mir-28a', 
        'mmu-mir-28b', 'mmu-mir-28c', 'mmu-mir-290a', 'mmu-mir-290b', 'mmu-mir-291a', 'mmu-mir-291b', 'mmu-mir-292a', 'mmu-mir-292b', 'mmu-mir-293', 
        'mmu-mir-294', 'mmu-mir-295', 'mmu-mir-296', 'mmu-mir-297a-1', 'mmu-mir-297a-2', 'mmu-mir-297a-3', 'mmu-mir-297a-4', 'mmu-mir-297b', 'mmu-mir-297c', 
        'mmu-mir-298', 'mmu-mir-299a', 'mmu-mir-299b', 'mmu-mir-29a', 'mmu-mir-29b-1', 'mmu-mir-29b-2', 'mmu-mir-29c', 'mmu-mir-300', 'mmu-mir-301a', 
        'mmu-mir-301b', 'mmu-mir-302a', 'mmu-mir-302b', 'mmu-mir-302c', 'mmu-mir-302d', 'mmu-mir-3057', 'mmu-mir-3058', 'mmu-mir-3059', 'mmu-mir-3060', 
        'mmu-mir-3061', 'mmu-mir-3062', 'mmu-mir-3063', 'mmu-mir-3064', 'mmu-mir-3065', 'mmu-mir-3066', 'mmu-mir-3067', 'mmu-mir-3068', 'mmu-mir-3069', 
        'mmu-mir-3070-1', 'mmu-mir-3070-2', 'mmu-mir-3071', 'mmu-mir-3072', 'mmu-mir-3073a', 'mmu-mir-3073b', 'mmu-mir-3074-1', 'mmu-mir-3074-2', 
        'mmu-mir-3075', 'mmu-mir-3076', 'mmu-mir-3077', 'mmu-mir-3078', 'mmu-mir-3079', 'mmu-mir-3080', 'mmu-mir-3081', 'mmu-mir-3082', 'mmu-mir-3083', 
        'mmu-mir-3083b', 'mmu-mir-3084-1', 'mmu-mir-3084-2', 'mmu-mir-3085', 'mmu-mir-3086', 'mmu-mir-3087', 'mmu-mir-3088', 'mmu-mir-3089', 'mmu-mir-3090', 
        'mmu-mir-3091', 'mmu-mir-3092', 'mmu-mir-3093', 'mmu-mir-3094', 'mmu-mir-3095', 'mmu-mir-3097', 'mmu-mir-3098', 'mmu-mir-3099', 'mmu-mir-30a', 
        'mmu-mir-30b', 'mmu-mir-30c-1', 'mmu-mir-30c-2', 'mmu-mir-30d', 'mmu-mir-30e', 'mmu-mir-30f', 'mmu-mir-31', 'mmu-mir-3100', 'mmu-mir-3101', 
        'mmu-mir-3102', 'mmu-mir-3103', 'mmu-mir-3104', 'mmu-mir-3105', 'mmu-mir-3106', 'mmu-mir-3108', 'mmu-mir-3109', 'mmu-mir-3110', 'mmu-mir-3112', 
        'mmu-mir-3113', 'mmu-mir-3154', 'mmu-mir-32', 'mmu-mir-320', 'mmu-mir-322', 'mmu-mir-323', 'mmu-mir-324', 'mmu-mir-325', 'mmu-mir-326', 'mmu-mir-327', 
        'mmu-mir-328', 'mmu-mir-329', 'mmu-mir-33', 'mmu-mir-330', 'mmu-mir-331', 'mmu-mir-335', 'mmu-mir-337', 'mmu-mir-338', 'mmu-mir-339', 'mmu-mir-340', 
        'mmu-mir-341', 'mmu-mir-342', 'mmu-mir-343', 'mmu-mir-344-1', 'mmu-mir-344-2', 'mmu-mir-344b', 'mmu-mir-344c', 'mmu-mir-344d-1', 'mmu-mir-344d-2', 
        'mmu-mir-344d-3', 'mmu-mir-344e', 'mmu-mir-344f', 'mmu-mir-344g', 'mmu-mir-344h-1', 'mmu-mir-344h-2', 'mmu-mir-344i', 'mmu-mir-345', 'mmu-mir-346', 
        'mmu-mir-3470a', 'mmu-mir-3470b', 'mmu-mir-3471-1', 'mmu-mir-3471-2', 'mmu-mir-3472', 'mmu-mir-3473a', 'mmu-mir-3473b', 'mmu-mir-3473c', 
        'mmu-mir-3473d', 'mmu-mir-3473e', 'mmu-mir-3473f', 'mmu-mir-3473g', 'mmu-mir-3473h', 'mmu-mir-3474', 'mmu-mir-3475', 'mmu-mir-34a', 'mmu-mir-34b', 
        'mmu-mir-34c', 'mmu-mir-350', 'mmu-mir-351', 'mmu-mir-3535', 'mmu-mir-3544', 'mmu-mir-3547', 'mmu-mir-3552', 'mmu-mir-3569', 'mmu-mir-3572', 
        'mmu-mir-361', 'mmu-mir-3618', 'mmu-mir-362', 'mmu-mir-3620', 'mmu-mir-363', 'mmu-mir-365-1', 'mmu-mir-365-2', 'mmu-mir-367', 'mmu-mir-369', 
        'mmu-mir-370', 'mmu-mir-374b', 'mmu-mir-374c', 'mmu-mir-375', 'mmu-mir-376a', 'mmu-mir-376b', 'mmu-mir-376c', 'mmu-mir-377', 'mmu-mir-378a', 
        'mmu-mir-378b', 'mmu-mir-378c', 'mmu-mir-378d', 'mmu-mir-379', 'mmu-mir-380', 'mmu-mir-381', 'mmu-mir-382', 'mmu-mir-383', 'mmu-mir-384', 
        'mmu-mir-3960', 'mmu-mir-3961', 'mmu-mir-3962', 'mmu-mir-3963', 'mmu-mir-3964', 'mmu-mir-3965', 'mmu-mir-3966', 'mmu-mir-3967', 'mmu-mir-3968', 
        'mmu-mir-3969', 'mmu-mir-3970', 'mmu-mir-3971', 'mmu-mir-409', 'mmu-mir-410', 'mmu-mir-411', 'mmu-mir-412', 'mmu-mir-421', 'mmu-mir-423', 'mmu-mir-425', 
        'mmu-mir-429', 'mmu-mir-431', 'mmu-mir-432', 'mmu-mir-433', 'mmu-mir-434', 'mmu-mir-448', 'mmu-mir-449a', 'mmu-mir-449b', 'mmu-mir-449c', 
        'mmu-mir-450a-1', 'mmu-mir-450a-2', 'mmu-mir-450b', 'mmu-mir-451a', 'mmu-mir-451b', 'mmu-mir-452', 'mmu-mir-453', 'mmu-mir-455', 'mmu-mir-463', 
        'mmu-mir-465a', 'mmu-mir-465b-1', 'mmu-mir-465b-2', 'mmu-mir-465c-1', 'mmu-mir-465c-2', 'mmu-mir-465d', 'mmu-mir-466a', 'mmu-mir-466b-1', 
        'mmu-mir-466b-2', 'mmu-mir-466b-3', 'mmu-mir-466b-4', 'mmu-mir-466b-5', 'mmu-mir-466b-6', 'mmu-mir-466b-7', 'mmu-mir-466b-8', 'mmu-mir-466c-1', 
        'mmu-mir-466c-2', 'mmu-mir-466c-3', 'mmu-mir-466d', 'mmu-mir-466e', 'mmu-mir-466f-1', 'mmu-mir-466f-2', 'mmu-mir-466f-3', 'mmu-mir-466f-4', 
        'mmu-mir-466g', 'mmu-mir-466h', 'mmu-mir-466i', 'mmu-mir-466j', 'mmu-mir-466k', 'mmu-mir-466l', 'mmu-mir-466m', 'mmu-mir-466n', 'mmu-mir-466o', 
        'mmu-mir-466p', 'mmu-mir-466q', 'mmu-mir-467a-1', 'mmu-mir-467a-10', 'mmu-mir-467a-2', 'mmu-mir-467a-3', 'mmu-mir-467a-4', 'mmu-mir-467a-5', 
        'mmu-mir-467a-6', 'mmu-mir-467a-7', 'mmu-mir-467a-8', 'mmu-mir-467a-9', 'mmu-mir-467b', 'mmu-mir-467c', 'mmu-mir-467d', 'mmu-mir-467e', 'mmu-mir-467f', 
        'mmu-mir-467g', 'mmu-mir-467h', 'mmu-mir-468', 'mmu-mir-470', 'mmu-mir-471', 'mmu-mir-483', 'mmu-mir-484', 'mmu-mir-485', 'mmu-mir-486a', 
        'mmu-mir-486b', 'mmu-mir-487b', 'mmu-mir-488', 'mmu-mir-489', 'mmu-mir-490', 'mmu-mir-491', 'mmu-mir-493', 'mmu-mir-494', 'mmu-mir-495', 'mmu-mir-496a', 
        'mmu-mir-496b', 'mmu-mir-497a', 'mmu-mir-497b', 'mmu-mir-499', 'mmu-mir-500', 'mmu-mir-501', 'mmu-mir-503', 'mmu-mir-504', 'mmu-mir-5046', 
        'mmu-mir-505', 'mmu-mir-509', 'mmu-mir-5098', 'mmu-mir-5099', 'mmu-mir-5100', 'mmu-mir-5101', 'mmu-mir-5103', 'mmu-mir-5104', 'mmu-mir-5104b', 
        'mmu-mir-5106', 'mmu-mir-5107', 'mmu-mir-5108', 'mmu-mir-511', 'mmu-mir-5110', 'mmu-mir-5112', 'mmu-mir-5113', 'mmu-mir-5114', 'mmu-mir-5116', 
        'mmu-mir-5118', 'mmu-mir-5119', 'mmu-mir-5120', 'mmu-mir-5121', 'mmu-mir-5122', 'mmu-mir-5123', 'mmu-mir-5124a', 'mmu-mir-5124b', 'mmu-mir-5125', 
        'mmu-mir-5126', 'mmu-mir-5127', 'mmu-mir-5128', 'mmu-mir-5129', 'mmu-mir-5130', 'mmu-mir-5131', 'mmu-mir-5132', 'mmu-mir-5133', 'mmu-mir-5134', 
        'mmu-mir-5135', 'mmu-mir-5136', 'mmu-mir-532', 'mmu-mir-539', 'mmu-mir-540', 'mmu-mir-541', 'mmu-mir-542', 'mmu-mir-543', 'mmu-mir-544', 'mmu-mir-546', 
        'mmu-mir-547', 'mmu-mir-551b', 'mmu-mir-5615-1', 'mmu-mir-5615-2', 'mmu-mir-5616', 'mmu-mir-5617', 'mmu-mir-5618', 'mmu-mir-5619', 'mmu-mir-5620', 
        'mmu-mir-5621', 'mmu-mir-5622', 'mmu-mir-5623', 'mmu-mir-5624', 'mmu-mir-5625', 'mmu-mir-5626', 'mmu-mir-5627', 'mmu-mir-568', 'mmu-mir-5709', 
        'mmu-mir-5710', 'mmu-mir-574', 'mmu-mir-582', 'mmu-mir-592', 'mmu-mir-598', 'mmu-mir-599', 'mmu-mir-615', 'mmu-mir-6236', 'mmu-mir-6237', 
        'mmu-mir-6238', 'mmu-mir-6239', 'mmu-mir-6240', 'mmu-mir-6241', 'mmu-mir-6244', 'mmu-mir-6335', 'mmu-mir-6336', 'mmu-mir-6337', 'mmu-mir-6338', 
        'mmu-mir-6339', 'mmu-mir-6340', 'mmu-mir-6341', 'mmu-mir-6342', 'mmu-mir-6343', 'mmu-mir-6344', 'mmu-mir-6345', 'mmu-mir-6346', 'mmu-mir-6347', 
        'mmu-mir-6348', 'mmu-mir-6349', 'mmu-mir-6350', 'mmu-mir-6351', 'mmu-mir-6352', 'mmu-mir-6353', 'mmu-mir-6354', 'mmu-mir-6355', 'mmu-mir-6356', 
        'mmu-mir-6357', 'mmu-mir-6358', 'mmu-mir-6359', 'mmu-mir-6360', 'mmu-mir-6361', 'mmu-mir-6362', 'mmu-mir-6363', 'mmu-mir-6364', 'mmu-mir-6365', 
        'mmu-mir-6366', 'mmu-mir-6367', 'mmu-mir-6368', 'mmu-mir-6369', 'mmu-mir-6370', 'mmu-mir-6371', 'mmu-mir-6372', 'mmu-mir-6373', 'mmu-mir-6374', 
        'mmu-mir-6375', 'mmu-mir-6376', 'mmu-mir-6377', 'mmu-mir-6378', 'mmu-mir-6379', 'mmu-mir-6380', 'mmu-mir-6381', 'mmu-mir-6382', 'mmu-mir-6383', 
        'mmu-mir-6384', 'mmu-mir-6385', 'mmu-mir-6386', 'mmu-mir-6387', 'mmu-mir-6388', 'mmu-mir-6389', 'mmu-mir-6390', 'mmu-mir-6391', 'mmu-mir-6392', 
        'mmu-mir-6393', 'mmu-mir-6394', 'mmu-mir-6395', 'mmu-mir-6396', 'mmu-mir-6397', 'mmu-mir-6398', 'mmu-mir-6399', 'mmu-mir-6400', 'mmu-mir-6401', 
        'mmu-mir-6402', 'mmu-mir-6403', 'mmu-mir-6404', 'mmu-mir-6405', 'mmu-mir-6406', 'mmu-mir-6407', 'mmu-mir-6408', 'mmu-mir-6409', 'mmu-mir-6410', 
        'mmu-mir-6411', 'mmu-mir-6412', 'mmu-mir-6413', 'mmu-mir-6414', 'mmu-mir-6415', 'mmu-mir-6416', 'mmu-mir-6417', 'mmu-mir-6418', 'mmu-mir-6419', 
        'mmu-mir-6420', 'mmu-mir-6481', 'mmu-mir-6516', 'mmu-mir-652', 'mmu-mir-653', 'mmu-mir-6537', 'mmu-mir-6538', 'mmu-mir-6539', 'mmu-mir-654', 
        'mmu-mir-6540', 'mmu-mir-6541', 'mmu-mir-6546', 'mmu-mir-664', 'mmu-mir-665', 'mmu-mir-666', 'mmu-mir-667', 'mmu-mir-668', 'mmu-mir-669a-1', 
        'mmu-mir-669a-10', 'mmu-mir-669a-11', 'mmu-mir-669a-12', 'mmu-mir-669a-2', 'mmu-mir-669a-3', 'mmu-mir-669a-4', 'mmu-mir-669a-5', 'mmu-mir-669a-6', 
        'mmu-mir-669a-7', 'mmu-mir-669a-8', 'mmu-mir-669a-9', 'mmu-mir-669b', 'mmu-mir-669c', 'mmu-mir-669d', 'mmu-mir-669d-2', 'mmu-mir-669e', 'mmu-mir-669f', 
        'mmu-mir-669g', 'mmu-mir-669h', 'mmu-mir-669i', 'mmu-mir-669j', 'mmu-mir-669k', 'mmu-mir-669l', 'mmu-mir-669m-1', 'mmu-mir-669m-2', 'mmu-mir-669n', 
        'mmu-mir-669o', 'mmu-mir-669p-1', 'mmu-mir-669p-2', 'mmu-mir-670', 'mmu-mir-671', 'mmu-mir-6715', 'mmu-mir-672', 'mmu-mir-673', 'mmu-mir-674', 
        'mmu-mir-675', 'mmu-mir-676', 'mmu-mir-6769b', 'mmu-mir-677', 'mmu-mir-678', 'mmu-mir-679', 'mmu-mir-680-1', 'mmu-mir-680-2', 'mmu-mir-680-3', 
        'mmu-mir-681', 'mmu-mir-682', 'mmu-mir-683-1', 'mmu-mir-683-2', 'mmu-mir-684-1', 'mmu-mir-684-2', 'mmu-mir-686', 'mmu-mir-687', 'mmu-mir-688', 
        'mmu-mir-6896', 'mmu-mir-6897', 'mmu-mir-6898', 'mmu-mir-6899', 'mmu-mir-690', 'mmu-mir-6900', 'mmu-mir-6901', 'mmu-mir-6902', 'mmu-mir-6903', 
        'mmu-mir-6904', 'mmu-mir-6905', 'mmu-mir-6906', 'mmu-mir-6907', 'mmu-mir-6908', 'mmu-mir-6909', 'mmu-mir-691', 'mmu-mir-6910', 'mmu-mir-6911', 
        'mmu-mir-6912', 'mmu-mir-6913', 'mmu-mir-6914', 'mmu-mir-6915', 'mmu-mir-6916', 'mmu-mir-6917', 'mmu-mir-6918', 'mmu-mir-6919', 'mmu-mir-692-1', 
        'mmu-mir-692-2', 'mmu-mir-692-3', 'mmu-mir-6920', 'mmu-mir-6921', 'mmu-mir-6922', 'mmu-mir-6923', 'mmu-mir-6924', 'mmu-mir-6925', 'mmu-mir-6926', 
        'mmu-mir-6927', 'mmu-mir-6928', 'mmu-mir-6929', 'mmu-mir-693', 'mmu-mir-6930', 'mmu-mir-6931', 'mmu-mir-6932', 'mmu-mir-6933', 'mmu-mir-6934', 
        'mmu-mir-6935', 'mmu-mir-6936', 'mmu-mir-6937', 'mmu-mir-6938', 'mmu-mir-6939', 'mmu-mir-694', 'mmu-mir-6940', 'mmu-mir-6941', 'mmu-mir-6942', 
        'mmu-mir-6943', 'mmu-mir-6944', 'mmu-mir-6945', 'mmu-mir-6946', 'mmu-mir-6947', 'mmu-mir-6948', 'mmu-mir-6949', 'mmu-mir-695', 'mmu-mir-6950', 
        'mmu-mir-6951', 'mmu-mir-6952', 'mmu-mir-6953', 'mmu-mir-6954', 'mmu-mir-6955', 'mmu-mir-6956', 'mmu-mir-6957', 'mmu-mir-6958', 'mmu-mir-6959', 
        'mmu-mir-6960', 'mmu-mir-6961', 'mmu-mir-6962', 'mmu-mir-6963', 'mmu-mir-6964', 'mmu-mir-6965', 'mmu-mir-6966', 'mmu-mir-6967-1', 'mmu-mir-6967-2', 
        'mmu-mir-6968', 'mmu-mir-6969', 'mmu-mir-697', 'mmu-mir-6970', 'mmu-mir-6971', 'mmu-mir-6972', 'mmu-mir-6973a', 'mmu-mir-6973b', 'mmu-mir-6974', 
        'mmu-mir-6975', 'mmu-mir-6976', 'mmu-mir-6977', 'mmu-mir-6978', 'mmu-mir-6979', 'mmu-mir-698', 'mmu-mir-6980', 'mmu-mir-6981', 'mmu-mir-6982', 
        'mmu-mir-6983', 'mmu-mir-6984', 'mmu-mir-6985', 'mmu-mir-6986', 'mmu-mir-6987', 'mmu-mir-6988', 'mmu-mir-6989', 'mmu-mir-6990', 'mmu-mir-6991', 
        'mmu-mir-6992', 'mmu-mir-6993', 'mmu-mir-6994', 'mmu-mir-6995', 'mmu-mir-6996', 'mmu-mir-6997', 'mmu-mir-6998', 'mmu-mir-6999', 'mmu-mir-700', 
        'mmu-mir-7000', 'mmu-mir-7001', 'mmu-mir-7002', 'mmu-mir-7003', 'mmu-mir-7004', 'mmu-mir-7005', 'mmu-mir-7006', 'mmu-mir-7007', 'mmu-mir-7008', 
        'mmu-mir-7009', 'mmu-mir-701', 'mmu-mir-7010', 'mmu-mir-7011', 'mmu-mir-7012', 'mmu-mir-7013', 'mmu-mir-7014', 'mmu-mir-7015', 'mmu-mir-7016', 
        'mmu-mir-7017', 'mmu-mir-7018', 'mmu-mir-7019', 'mmu-mir-702', 'mmu-mir-7020', 'mmu-mir-7021', 'mmu-mir-7022', 'mmu-mir-7023', 'mmu-mir-7024', 
        'mmu-mir-7025', 'mmu-mir-7026', 'mmu-mir-7027', 'mmu-mir-7028', 'mmu-mir-7029', 'mmu-mir-703', 'mmu-mir-7030', 'mmu-mir-7031', 'mmu-mir-7032', 
        'mmu-mir-7033', 'mmu-mir-7034', 'mmu-mir-7035', 'mmu-mir-7036a', 'mmu-mir-7036b', 'mmu-mir-7037', 'mmu-mir-7038', 'mmu-mir-7039', 'mmu-mir-704', 
        'mmu-mir-7040', 'mmu-mir-7041', 'mmu-mir-7042', 'mmu-mir-7043', 'mmu-mir-7044', 'mmu-mir-7045', 'mmu-mir-7046', 'mmu-mir-7047', 'mmu-mir-7048', 
        'mmu-mir-7049', 'mmu-mir-705', 'mmu-mir-7050', 'mmu-mir-7051', 'mmu-mir-7052', 'mmu-mir-7053', 'mmu-mir-7054', 'mmu-mir-7055', 'mmu-mir-7056', 
        'mmu-mir-7057', 'mmu-mir-7058', 'mmu-mir-7059', 'mmu-mir-706', 'mmu-mir-7060', 'mmu-mir-7061', 'mmu-mir-7062', 'mmu-mir-7063', 'mmu-mir-7064', 
        'mmu-mir-7065', 'mmu-mir-7066', 'mmu-mir-7067', 'mmu-mir-7068', 'mmu-mir-7069', 'mmu-mir-707', 'mmu-mir-7070', 'mmu-mir-7071', 'mmu-mir-7072', 
        'mmu-mir-7073', 'mmu-mir-7074', 'mmu-mir-7075', 'mmu-mir-7076', 'mmu-mir-7077', 'mmu-mir-7078', 'mmu-mir-7079', 'mmu-mir-708', 'mmu-mir-7080', 
        'mmu-mir-7081', 'mmu-mir-7082', 'mmu-mir-7083', 'mmu-mir-7084', 'mmu-mir-7085', 'mmu-mir-7086', 'mmu-mir-7087', 'mmu-mir-7088', 'mmu-mir-7089', 
        'mmu-mir-709', 'mmu-mir-7090', 'mmu-mir-7091', 'mmu-mir-7092', 'mmu-mir-7093', 'mmu-mir-7094-1', 'mmu-mir-7094-2', 'mmu-mir-710', 'mmu-mir-711', 
        'mmu-mir-7115', 'mmu-mir-7116', 'mmu-mir-7117', 'mmu-mir-7118', 'mmu-mir-7119', 'mmu-mir-713', 'mmu-mir-717', 'mmu-mir-718', 'mmu-mir-719', 
        'mmu-mir-721', 'mmu-mir-7210', 'mmu-mir-7211', 'mmu-mir-7212', 'mmu-mir-7213', 'mmu-mir-7214', 'mmu-mir-7215', 'mmu-mir-7216', 'mmu-mir-7217', 
        'mmu-mir-7218', 'mmu-mir-7219', 'mmu-mir-7220', 'mmu-mir-7221', 'mmu-mir-7222', 'mmu-mir-7223', 'mmu-mir-7224', 'mmu-mir-7225', 'mmu-mir-7226', 
        'mmu-mir-7227', 'mmu-mir-7229', 'mmu-mir-7230', 'mmu-mir-7231', 'mmu-mir-7232', 'mmu-mir-7233', 'mmu-mir-7234', 'mmu-mir-7235', 'mmu-mir-7236', 
        'mmu-mir-7237', 'mmu-mir-7239', 'mmu-mir-7240', 'mmu-mir-7241', 'mmu-mir-7242', 'mmu-mir-7243', 'mmu-mir-741', 'mmu-mir-742', 'mmu-mir-743a', 
        'mmu-mir-743b', 'mmu-mir-744', 'mmu-mir-7578', 'mmu-mir-758', 'mmu-mir-759', 'mmu-mir-760', 'mmu-mir-761', 'mmu-mir-762', 'mmu-mir-763', 'mmu-mir-764', 
        'mmu-mir-7646', 'mmu-mir-7647', 'mmu-mir-7648', 'mmu-mir-7649', 'mmu-mir-7650', 'mmu-mir-7651', 'mmu-mir-7652', 'mmu-mir-7653', 'mmu-mir-7654', 
        'mmu-mir-7655', 'mmu-mir-7656', 'mmu-mir-7657', 'mmu-mir-7658', 'mmu-mir-7659', 'mmu-mir-7660', 'mmu-mir-7661', 'mmu-mir-7662', 'mmu-mir-7663', 
        'mmu-mir-7664', 'mmu-mir-7665', 'mmu-mir-7666', 'mmu-mir-7667', 'mmu-mir-7668', 'mmu-mir-7669', 'mmu-mir-767', 'mmu-mir-7670', 'mmu-mir-7671', 
        'mmu-mir-7672', 'mmu-mir-7673', 'mmu-mir-7674', 'mmu-mir-7675', 'mmu-mir-7676-1', 'mmu-mir-7676-2', 'mmu-mir-7677', 'mmu-mir-7678', 'mmu-mir-7679', 
        'mmu-mir-7680', 'mmu-mir-7681', 'mmu-mir-7682', 'mmu-mir-7683', 'mmu-mir-7684', 'mmu-mir-7685', 'mmu-mir-7686', 'mmu-mir-7687', 'mmu-mir-7688', 
        'mmu-mir-7689', 'mmu-mir-770', 'mmu-mir-7a-1', 'mmu-mir-7a-2', 'mmu-mir-7b', 'mmu-mir-802', 'mmu-mir-804', 'mmu-mir-8090', 'mmu-mir-8091', 
        'mmu-mir-8092', 'mmu-mir-8093', 'mmu-mir-8094', 'mmu-mir-8095', 'mmu-mir-8096', 'mmu-mir-8097', 'mmu-mir-8098', 'mmu-mir-8099-1', 'mmu-mir-8099-2', 
        'mmu-mir-8100', 'mmu-mir-8101', 'mmu-mir-8102', 'mmu-mir-8103', 'mmu-mir-8104', 'mmu-mir-8105', 'mmu-mir-8106', 'mmu-mir-8107', 'mmu-mir-8108', 
        'mmu-mir-8109', 'mmu-mir-8110', 'mmu-mir-8111', 'mmu-mir-8112', 'mmu-mir-8113', 'mmu-mir-8114', 'mmu-mir-8115', 'mmu-mir-8116', 'mmu-mir-8117', 
        'mmu-mir-8118', 'mmu-mir-8119', 'mmu-mir-8120', 'mmu-mir-871', 'mmu-mir-872', 'mmu-mir-873a', 'mmu-mir-873b', 'mmu-mir-874', 'mmu-mir-875', 
        'mmu-mir-876', 'mmu-mir-877', 'mmu-mir-878', 'mmu-mir-879', 'mmu-mir-880', 'mmu-mir-881', 'mmu-mir-882', 'mmu-mir-883a', 'mmu-mir-883b', 'mmu-mir-9-1', 
        'mmu-mir-9-2', 'mmu-mir-9-3', 'mmu-mir-92a-1', 'mmu-mir-92a-2', 'mmu-mir-92b', 'mmu-mir-93', 'mmu-mir-935', 'mmu-mir-96', 'mmu-mir-9718', 
        'mmu-mir-9768', 'mmu-mir-9769', 'mmu-mir-98', 'mmu-mir-99a', 'mmu-mir-99b', 'mmu-mir-9b-1', 'mmu-mir-9b-2', 'mmu-mir-9b-3'
    ]
};

// Organism-version mapping (removed third mouse option)
const ORGANISM_VERSION_MAP = {
    'human_GRCh38': { organism: 'human', version: 'GRCh38' },
    'mouse_GRCm39': { organism: 'mouse', version: 'GRCm39' }
};

// Store original texts for all options (removed third mouse option)
const ORIGINAL_TEXTS = {
    'human_GRCh38': 'Human (GRCh38/hg38)',
    'mouse_GRCm39': 'Mouse (GRCm39/mm39)'
};

// Home Page Initialization
function initializeHomePage() {
    initializeSearchForm();
    initializeOrganismSelection();
    initializeAutocomplete();
    initializeExampleButton();
    initializeAnimations();
}

// Search Form Functionality
function initializeSearchForm() {
    const searchForm = document.getElementById('searchForm');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    if (!searchForm) return;

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission for now since we don't have the database
        
        const organismSelect = document.getElementById('organism');
        const mirnaInput = document.getElementById('mirna_name');
        
        if (!organismSelect || !mirnaInput) return;
        
        const organismVersion = organismSelect.value;
        const mirnaName = mirnaInput.value.trim();
        
        if (!mirnaName) {
            return;
        }
        
        // For now, show mock data for hsa-let-7a-1 or similar patterns
        // When you have the database, you can remove this and let the form submit normally
        if (mirnaName.toLowerCase().includes('let-7a') || mirnaName.toLowerCase().includes('let7a')) {
            // Show mock data for hsa-let-7a-1
            showSearchResults(mirnaName, organismVersion);
        } else {
            // For other miRNAs, show a message that this is mock data
            showMockDataMessage(mirnaName, organismVersion);
        }
    });
    
    // TODO: When database is ready, change the form to submit to Django:
    // 1. Remove e.preventDefault() above
    // 2. Add method="GET" action="{% url 'search' %}" to the form in home.html
    // 3. Change the input name from "mirna_name" to "q"
    // 4. The search view will handle the actual database queries
}

// Example Button Functionality
function initializeExampleButton() {
    const exampleBtn = document.getElementById('exampleBtn');
    
    if (!exampleBtn) return;
    
    exampleBtn.addEventListener('click', function() {
        // Set organism to Human
        const organismSelect = document.getElementById('organism');
        if (organismSelect) {
            organismSelect.value = 'human_GRCh38';
            updateOrganismDisplay('human_GRCh38');
        }
        
        // Set miRNA name to hsa-let-7a
        const mirnaInput = document.getElementById('mirna_name');
        if (mirnaInput) {
            mirnaInput.value = 'hsa-let-7a';
        }
        
        // Update autocomplete suggestions
        updateAutocompleteSuggestions('human_GRCh38');
        
        // Show example results
        showExampleResults();
    });
}

// Show Search Results
function showSearchResults(mirnaName, organismVersion) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    // Update the miRNA display name
    const mirnaDisplayName = document.getElementById('mirnaDisplayName');
    if (mirnaDisplayName) {
        mirnaDisplayName.textContent = mirnaName;
    }
    
    // Update Basic Information fields
    updateBasicInformation(mirnaName, organismVersion);
    
    // Show the results container
    searchResults.style.display = 'grid';
    
    // Initialize collapsible containers
    initializeCollapsibleContainers();
    
    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Update Basic Information Fields
function updateBasicInformation(mirnaName, organismVersion) {
    // Mock data - replace with actual API data
    const basicInfo = getBasicInfoData(mirnaName, organismVersion);
    
    // Update each field
    updateField('fullName', basicInfo.fullName);
    updateField('sequence', basicInfo.sequence);
    updateField('mirbaseAccession', basicInfo.mirbaseAccession);
    updateField('confidence', basicInfo.confidence);
    updateField('preMirnaCoordinates', basicInfo.preMirnaCoordinates);
    
    // Update multi-line fields
    updateMultiLineField('matureMirnas', basicInfo.matureMirnas);
    updateMultiLineField('matureAccessions', basicInfo.matureAccessions);
    updateMultiLineField('matureCoordinates', basicInfo.matureCoordinates);
    updateMultiLineField('matureSequences', basicInfo.matureSequences);
    
    // Handle conditional fields
    updateConditionalField('ensemblId', basicInfo.ensemblId, 'ensemblRow');
    updateConditionalField('geneName', basicInfo.geneName, 'geneNameRow');
    
    // Update confidence styling
    updateConfidenceStyling(basicInfo.confidence);
    
    // Update external links after all Basic Information is populated
    setTimeout(() => {
        updateExternalLinks(mirnaName, organismVersion);
    }, 50);
}

// Update a single field
function updateField(fieldId, value) {
    const element = document.getElementById(fieldId);
    if (element) {
        if (fieldId === 'sequence') {
            // Special handling for sequence with 5' and 3' indicators
            element.innerHTML = `<span class="sequence-wrapper"><span class="sequence-5p">5' - </span><span class="sequence-text">${value}</span><span class="sequence-3p"> - 3'</span></span>`;
        } else {
            element.textContent = value;
        }
    }
}

// Update conditional fields (show/hide based on data availability)
function updateConditionalField(fieldId, value, rowId) {
    const element = document.getElementById(fieldId);
    const row = document.getElementById(rowId);
    
    if (element && row) {
        if (value && value.trim() !== '') {
            element.textContent = value;
            row.style.display = 'flex';
        } else {
            row.style.display = 'none';
        }
    }
}

// Update multi-line fields
function updateMultiLineField(fieldId, values) {
    const element = document.getElementById(fieldId);
    if (element && Array.isArray(values)) {
        let multiLineHtml;
        if (fieldId === 'matureSequences') {
            // Special handling for sequences with 5' and 3' indicators
            multiLineHtml = values.map(value => `<span class="copyable-item sequence-item">5' - ${value} - 3'</span>`).join('');
        } else {
            multiLineHtml = values.map(value => `<span class="copyable-item">${value}</span>`).join('');
        }
        element.innerHTML = `<div class="multi-line-value">${multiLineHtml}</div>`;
    }
}

// Get Basic Information Data (mock function - replace with actual API call)
function getBasicInfoData(mirnaName, organismVersion) {
    // Helper function to get organism display name
    function getOrganismDisplayName(organismVersion) {
        if (organismVersion.includes('human')) {
            return 'Homo sapiens (human)';
        } else if (organismVersion.includes('mouse')) {
            return 'Mus musculus (house mouse)';
        }
        return organismVersion;
    }
    
    // Mock data - replace with actual API data
    const mockData = {
        'hsa-let-7a-1': {
            fullName: 'Homo sapiens (human) hsa-let-7a-1',
            sequence: 'UGGGAUGAGGUAGUAGGUUGUAUAGUUUUAGGGUCACACCCACCACUGGGAGAUAACUAUACAAUCUACUGUCUUUCCUA',
            mirbaseAccession: 'MI0000060',
            confidence: 'High',
            preMirnaCoordinates: 'chr9:94,175,957-94,176,036(+)',
            ensemblId: 'ENSG00000199165.3',
            geneName: 'MIRLET7A1',
            matureMirnas: ['hsa-let-7a-5p', 'hsa-let-7a-3p'],
            matureAccessions: ['MIMAT0000062_2', 'MIMAT0004481_1'],
            matureCoordinates: ['chr9:94,175,962-94,175,983(+)', 'chr9:94,176,013-94,176,033(+)'],
            matureSequences: ['UGAGGUAGUAGGUUGUAUAGUU', 'CUAUACAAUCUACUGUCUUUC']
        },
        'hsa-miR-99b': {
            fullName: 'Homo sapiens (human) hsa-miR-99b',
            sequence: 'AACCCGUAGAUCCGAUCUUGUG',
            mirbaseAccession: 'MI0000109',
            confidence: 'High',
            preMirnaCoordinates: 'chr9:51692612-51692681(+)',
            ensemblId: 'ENSG00000207550.1',
            geneName: 'MIR99B',
            matureMirnas: ['hsa-miR-99b-5p', 'hsa-miR-99b-3p'],
            matureAccessions: ['MIMAT0000689', 'MIMAT0004678'],
            matureCoordinates: ['chr9:51692618-51692639(+)', 'chr9:51692656-51692677(+)'],
            matureSequences: ['AACCCGUAGAUCCGAUCUUGUG', 'CAAGGCUGUUCGUGGUGGAAUC']
        },
        'hsa-miR-21': {
            fullName: 'Homo sapiens (human) hsa-miR-21',
            sequence: 'UAGCUUAUCAGACUGAUGUUGA',
            mirbaseAccession: 'MI0000077',
            confidence: 'Low',
            preMirnaCoordinates: 'chr17:59841266-59841346(+)',
            ensemblId: 'ENSG00000184199.1', // Now has Ensembl data
            geneName: 'MIR21', // Now has gene name
            matureMirnas: ['hsa-miR-21-5p', 'hsa-miR-21-3p'],
            matureAccessions: ['MIMAT0000076', 'MIMAT0004494'],
            matureCoordinates: ['chr17:59841272-59841293(+)', 'chr17:59841320-59841341(+)'],
            matureSequences: ['UAGCUUAUCAGACUGAUGUUGA', 'AACAUCAAGUCUGAUAAGCUA']
        },
        'mmu-let-7g': {
            fullName: 'Mus musculus (house mouse) mmu-let-7g',
            sequence: 'UGAGGUAGUAGGUUGUACAGUU',
            mirbaseAccession: 'MI0000554',
            confidence: 'High',
            preMirnaCoordinates: 'chr9:106056789-106056869(+)',
            ensemblId: 'ENSMUSG00000000001.1',
            geneName: 'LET7G',
            matureMirnas: ['mmu-let-7g-5p', 'mmu-let-7g-3p'],
            matureAccessions: ['MIMAT0000128', 'MIMAT0004679'],
            matureCoordinates: ['chr9:106056795-106056816(+)', 'chr9:106056832-106056853(+)'],
            matureSequences: ['UGAGGUAGUAGGUUGUACAGUU', 'CUGUACAGCCUCCUAGCUUUCC']
        }
    };
    
    // Return mock data or default values
    const organismDisplay = getOrganismDisplayName(organismVersion);
    return mockData[mirnaName] || {
        fullName: `${organismDisplay} ${mirnaName}`,
        sequence: 'UGGGAUGAGGUAGUAGGUUGUAUAGUUUUAGGGUCACACCCACCACUGGGAGAUAACUAUACAAUCUACUGUCUUUCCUA',
        mirbaseAccession: 'MI0000000',
        confidence: 'Medium',
        preMirnaCoordinates: 'chr9:1000000-1000081(+)',
        ensemblId: '', // Empty to hide the row
        geneName: '', // Empty to hide the row
        matureMirnas: [`${mirnaName}-5p`, `${mirnaName}-3p`],
        matureAccessions: ['MIMAT0000000', 'MIMAT0000001'],
        matureCoordinates: ['chr9:1000006-1000027(+)', 'chr9:1000060-1000081(+)'],
        matureSequences: ['UGAGGUAGUAGGUUGUAGGUU', 'CUGUACAGCCUCCUAGCUUUCC']
    };
}

// Update External Resource Links
function updateExternalLinks(mirnaName, organismVersion) {
    // Update miRBase link using hairpin format with miRBase Accession
    const mirbaseLink = document.getElementById('mirbaseLink');
    const mirbaseAccession = document.getElementById('mirbaseAccession');
    if (mirbaseLink && mirbaseAccession) {
        const accessionValue = mirbaseAccession.textContent.trim();
        if (accessionValue && accessionValue !== '') {
            const mirbaseUrl = `https://www.mirbase.org/hairpin/${accessionValue}`;
            mirbaseLink.href = mirbaseUrl;
            mirbaseLink.target = '_blank';
            mirbaseLink.rel = 'noopener noreferrer';
            
            // Add explicit click handler for debugging
            mirbaseLink.onclick = function(e) {
                console.log('miRBase link clicked!');
                console.log('Opening URL:', mirbaseUrl);
                window.open(mirbaseUrl, '_blank', 'noopener,noreferrer');
                e.preventDefault();
            };
            
            console.log('miRBase link updated to:', mirbaseUrl);
        } else {
            // Fallback to search query if no accession available
            const mirbaseUrl = `https://www.mirbase.org/results/?query=${encodeURIComponent(mirnaName)}`;
            mirbaseLink.href = mirbaseUrl;
            mirbaseLink.target = '_blank';
            mirbaseLink.rel = 'noopener noreferrer';
            
            // Add explicit click handler for debugging
            mirbaseLink.onclick = function(e) {
                console.log('miRBase link clicked!');
                console.log('Opening URL:', mirbaseUrl);
                window.open(mirbaseUrl, '_blank', 'noopener,noreferrer');
                e.preventDefault();
            };
            
            console.log('miRBase link updated to (fallback):', mirbaseUrl);
        }
    } else {
        console.error('miRBase link or accession element not found');
    }
    
    // Update Ensembl link (conditional on Ensembl ID existence)
    const ensemblLink = document.getElementById('ensemblLink');
    const ensemblId = document.getElementById('ensemblId');
    if (ensemblLink && ensemblId) {
        const ensemblIdValue = ensemblId.textContent.trim();
        console.log('Ensembl ID value:', ensemblIdValue);
        if (ensemblIdValue && ensemblIdValue !== '') {
            const ensemblUrl = `https://www.ensembl.org/Homo_sapiens/Gene/Summary?db=core;g=${ensemblIdValue}`;
            ensemblLink.href = ensemblUrl;
            ensemblLink.target = '_blank';
            ensemblLink.rel = 'noopener noreferrer';
            ensemblLink.style.display = 'inline-flex';
            
            // Add explicit click handler for debugging
            ensemblLink.onclick = function(e) {
                console.log('Ensembl link clicked!');
                console.log('Opening URL:', ensemblUrl);
                window.open(ensemblUrl, '_blank', 'noopener,noreferrer');
                e.preventDefault();
            };
            
            console.log('Ensembl link updated to:', ensemblUrl);
            console.log('Ensembl link href after update:', ensemblLink.href);
        } else {
            ensemblLink.style.display = 'none';
            console.log('Ensembl ID is empty, hiding Ensembl link');
        }
    } else {
        console.error('Ensembl link or Ensembl ID element not found');
    }
    
    // Update TarBase link using mature miRNA names
    const tarbaseLink = document.getElementById('tarbaseLink');
    const matureMirnasElement = document.getElementById('matureMirnas');
    if (tarbaseLink && matureMirnasElement) {
        // Get mature miRNA names from the DOM
        const matureMirnaItems = matureMirnasElement.querySelectorAll('.copyable-item');
        const matureMirnaNames = Array.from(matureMirnaItems).map(item => item.textContent.trim());
        
        console.log('Mature miRNA names found:', matureMirnaNames);
        
        if (matureMirnaNames.length > 0) {
            let tarbaseUrl;
            
            if (matureMirnaNames.length === 1) {
                // Single mature miRNA
                const singleMirna = matureMirnaNames[0];
                tarbaseUrl = `https://dianalab.e-ce.uth.gr/tarbasev9/interactions?gene=&mirna=${encodeURIComponent(singleMirna)}`;
            } else {
                // Multiple mature miRNAs - join with comma and space, then encode
                const joinedMirnas = matureMirnaNames.join(', ');
                tarbaseUrl = `https://dianalab.e-ce.uth.gr/tarbasev9/interactions?gene=&mirna=${encodeURIComponent(joinedMirnas)}`;
            }
            
            tarbaseLink.href = tarbaseUrl;
            tarbaseLink.target = '_blank';
            tarbaseLink.rel = 'noopener noreferrer';
            
            // Add explicit click handler for debugging
            tarbaseLink.onclick = function(e) {
                console.log('TarBase link clicked!');
                console.log('Opening URL:', tarbaseUrl);
                window.open(tarbaseUrl, '_blank', 'noopener,noreferrer');
                e.preventDefault();
            };
            
            console.log('TarBase link updated to:', tarbaseUrl);
            console.log('TarBase link href after update:', tarbaseLink.href);
        } else {
            console.log('No mature miRNA names found, TarBase link not updated');
        }
    } else {
        console.error('TarBase link or mature miRNAs element not found');
    }
    
    // Update miRNATissueAtlas link with dynamic organism and miRNA name
    const mirnaTissueAtlasLink = document.getElementById('mirnaTissueAtlasLink');
    if (mirnaTissueAtlasLink) {
        // Extract organism code from organismVersion (e.g., "human" -> "hsa", "mouse" -> "mmu")
        let organismCode = 'hsa'; // default to human
        if (organismVersion.includes('mouse')) {
            organismCode = 'mmu';
        } else if (organismVersion.includes('rat')) {
            organismCode = 'rno';
        } else if (organismVersion.includes('zebrafish')) {
            organismCode = 'dre';
        }
        
        // Use the first mature miRNA name for the link
        const matureMirnasElement = document.getElementById('matureMirnas');
        let mirnaNameForAtlas = mirnaName; // fallback to pre-miRNA name
        
        if (matureMirnasElement) {
            const matureMirnaItems = matureMirnasElement.querySelectorAll('.copyable-item');
            if (matureMirnaItems.length > 0) {
                mirnaNameForAtlas = matureMirnaItems[0].textContent.trim();
            }
        }
        
        const tissueAtlasUrl = `https://ccb-compute2.cs.uni-saarland.de/mirnatissueatlas_2025/top_correlations/${organismCode}/Atlas_2025_tissue/rpmm/${mirnaNameForAtlas}/`;
        
        mirnaTissueAtlasLink.href = tissueAtlasUrl;
        mirnaTissueAtlasLink.target = '_blank';
        mirnaTissueAtlasLink.rel = 'noopener noreferrer';
        
        // Add explicit click handler for debugging
        mirnaTissueAtlasLink.onclick = function(e) {
            console.log('miRNATissueAtlas link clicked!');
            console.log('Opening URL:', tissueAtlasUrl);
            window.open(tissueAtlasUrl, '_blank', 'noopener,noreferrer');
            e.preventDefault();
        };
        
        console.log('miRNATissueAtlas link updated to:', tissueAtlasUrl);
        console.log('miRNATissueAtlas link href after update:', mirnaTissueAtlasLink.href);
    } else {
        console.error('miRNATissueAtlas link element not found');
    }
    
    // Update UCSC Browser link (placeholder for now)
    const ucscLink = document.getElementById('ucscLink');
    if (ucscLink) {
        // You can add UCSC link logic here when needed
        ucscLink.href = '#';
    }
}



// Initialize Collapsible Containers
function initializeCollapsibleContainers() {
    // Alternative TSS container
    const altTssContent = document.getElementById('altTssContent');
    const altTssToggle = document.getElementById('altTssToggle');
    const altTssCard = document.getElementById('altTssHeader').closest('.collapsible-card');
    
    if (altTssContent && altTssCard) {
        // Start in closed state
        altTssCard.classList.add('collapsed');
        altTssContent.style.display = 'none';
        // Ensure toggle button shows chevron-down when closed
        if (altTssToggle) {
            altTssToggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
        }
    }
    
    // Transcription Factors container
    const tfContent = document.getElementById('tfContent');
    const tfToggle = document.getElementById('tfToggle');
    const tfCard = document.getElementById('tfHeader').closest('.collapsible-card');
    
    if (tfContent && tfCard) {
        // Start in closed state
        tfCard.classList.add('collapsed');
        tfContent.style.display = 'none';
        // Ensure toggle button shows chevron-down when closed
        if (tfToggle) {
            tfToggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
        }
    }
    
    // Initialize click-to-copy functionality
    initializeClickToCopy();
    
    // Initialize Details button functionality
    initializeDetailsButton();
}

// Toggle Collapsible Container
function toggleCollapsible(content, toggle, card) {
    const isCollapsed = card.classList.contains('collapsed');
    
    if (isCollapsed) {
        // Open the container
        content.style.display = 'block';
        card.classList.remove('collapsed');
        toggle.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else {
        // Close the container
        content.style.display = 'none';
        card.classList.add('collapsed');
        toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
}

// Show Example Results
function showExampleResults() {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    const exampleData = {
        mirna_name: 'hsa-let-7a-1',
        organism: 'Human',
        genome_version: 'GRCh38/hg38',
        tss_count: 3,
        chromosome: 'chr9',
        strand: '+',
        coordinates: '94,166,274',
        expression_level: 'High',
        confidence_score: 0.95
    };
    
    const resultsHtml = `
        <div class="result-card">
            <div class="result-header">
                <div>
                    <div class="result-title">${exampleData.mirna_name}</div>
                    <div class="result-subtitle">${exampleData.organism} (${exampleData.genome_version})</div>
                </div>
                <div class="result-badge">Example Result</div>
            </div>
            <div class="result-details">
                <div class="detail-item">
                    <span class="detail-label">TSS Count</span>
                    <span class="detail-value">${exampleData.tss_count}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Chromosome</span>
                    <span class="detail-value">${exampleData.chromosome}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Strand</span>
                    <span class="detail-value">${exampleData.strand}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Coordinates</span>
                    <span class="detail-value">${exampleData.coordinates}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Expression Level</span>
                    <span class="detail-value">${exampleData.expression_level}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Confidence Score</span>
                    <span class="detail-value">${exampleData.confidence_score}</span>
                </div>
            </div>
        </div>
    `;
    
    searchResults.innerHTML = resultsHtml;
    searchResults.style.display = 'block';
}

// Organism Selection Functionality
function initializeOrganismSelection() {
    const organismSelect = document.getElementById('organism');
    const organismHidden = document.getElementById('organismHidden');
    
    if (!organismSelect) return;

    // Set initial display to show only "Human"
    updateOrganismDisplay('human_GRCh38');
    
    // Set initial hidden field value
    if (organismHidden) {
        organismHidden.value = 'human_GRCh38';
    }

    organismSelect.addEventListener('mousedown', function() {
        // When dropdown opens, restore full text for all options
        restoreFullText();
    });

    organismSelect.addEventListener('change', function() {
        // When selection changes, show only organism name for selected option
        const selectedValue = this.value;
        if (selectedValue) {
            // Use setTimeout to ensure the change event completes before updating display
            setTimeout(() => {
                updateOrganismDisplay(selectedValue);
            }, 0);
            
            // Update the hidden organism field
            if (organismHidden) {
                organismHidden.value = selectedValue;
            }
            
            // Reset everything when organism changes
            resetForm();
        }
    });

    // Handle clicking outside the dropdown
    document.addEventListener('click', function(e) {
        if (!organismSelect.contains(e.target)) {
            // When clicking outside, ensure the selected option shows only organism name
            const selectedValue = organismSelect.value;
            if (selectedValue) {
                updateOrganismDisplay(selectedValue);
            }
        }
    });

    // Initialize autocomplete with default organism
    updateAutocompleteSuggestions('human_GRCh38');
}

// Reset form when organism changes
function resetForm() {
    const mirnaInput = document.getElementById('mirna_name');
    const searchResults = document.getElementById('searchResults');
    
    if (mirnaInput) {
        mirnaInput.value = '';
    }
    
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    }
    
    // Update autocomplete suggestions for new organism
    const organismSelect = document.getElementById('organism');
    if (organismSelect) {
        updateAutocompleteSuggestions(organismSelect.value);
    }
}

// Update organism display to show only "Human" or "Mouse"
function updateOrganismDisplay(organismVersion) {
    const organismSelect = document.getElementById('organism');
    if (!organismSelect) return;

    const selectedOption = organismSelect.querySelector(`option[value="${organismVersion}"]`);
    if (selectedOption) {
        const displayText = selectedOption.getAttribute('data-display');
        if (displayText) {
            // Update the selected option's text to show only the organism name
            selectedOption.textContent = displayText;
        }
    }
}

// Restore full text for all options when dropdown opens
function restoreFullText() {
    const organismSelect = document.getElementById('organism');
    if (!organismSelect) return;

    const options = organismSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (ORIGINAL_TEXTS[value]) {
            option.textContent = ORIGINAL_TEXTS[value];
        }
    });
}

// Autocomplete Functionality
function initializeAutocomplete() {
    const mirnaInput = document.getElementById('mirna_name');
    if (!mirnaInput) return;

    let autocompleteList = null;

    mirnaInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        const organismVersion = document.getElementById('organism').value;

        // Remove existing autocomplete list
        if (autocompleteList) {
            autocompleteList.remove();
            autocompleteList = null;
        }

        if (value.length < 2 || !organismVersion) return;

        // Get organism-specific suggestions
        const organismData = ORGANISM_VERSION_MAP[organismVersion];
        if (!organismData) return;

        const suggestions = miRNA_LISTS[organismData.organism] || [];
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value)
        ).slice(0, 8); // Limit to 8 suggestions

        if (filteredSuggestions.length === 0) return;

        // Create autocomplete list
        autocompleteList = document.createElement('div');
        autocompleteList.className = 'autocomplete-list';
        autocompleteList.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #e9ecef;
            border-top: none;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-height: 200px;
            overflow-y: auto;
            text-align: left;
        `;

        filteredSuggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = suggestion;
            item.style.cssText = `
                padding: 0.5rem 0.75rem;
                cursor: pointer;
                transition: background-color 0.2s ease;
                text-align: left;
                margin: 0;
                border-bottom: 1px solid #f0f0f0;
                font-size: 0.9rem;
            `;

            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
            });

            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'white';
            });

            item.addEventListener('click', function() {
                mirnaInput.value = suggestion;
                autocompleteList.remove();
                autocompleteList = null;
            });

            autocompleteList.appendChild(item);
        });

        // Remove border from last item
        const lastItem = autocompleteList.lastElementChild;
        if (lastItem) {
            lastItem.style.borderBottom = 'none';
        }

        // Position the autocomplete list
        const formGroup = mirnaInput.closest('.form-group');
        formGroup.style.position = 'relative';
        formGroup.appendChild(autocompleteList);
    });

    // Close autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!mirnaInput.contains(e.target) && (!autocompleteList || !autocompleteList.contains(e.target))) {
            if (autocompleteList) {
                autocompleteList.remove();
                autocompleteList = null;
            }
        }
    });
}

// Update Autocomplete Suggestions
function updateAutocompleteSuggestions(organismVersion) {
    const mirnaInput = document.getElementById('mirna_name');
    if (!mirnaInput) return;

    // Clear input and trigger input event to update suggestions
    mirnaInput.value = '';
    mirnaInput.dispatchEvent(new Event('input'));
}

// Perform Search (Simulate API call)
async function performSearch(organism, mirnaName, genomeVersion) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock data - replace with actual API call
    const mockResults = [
        {
            id: 1,
            name: mirnaName,
            organism: organism,
            genome_version: genomeVersion,
            chromosome: 'chr9',
            strand: '+',
            start: '94,175,957',
            end: '94,175,036',
            tss: '94,166,274',
            confidence: 'High',
            expression: 'Expressed',
            target_genes: 156,
            validated_targets: 23
        },
        {
            id: 2,
            name: mirnaName + '-2',
            organism: organism,
            genome_version: genomeVersion,
            chromosome: 'chr9',
            strand: '+',
            start: '94,166,284',
            end: '94,166,284',
            tss: '94,166,284',
            confidence: 'Medium',
            expression: 'Low',
            target_genes: 89,
            validated_targets: 12
        }
    ];

    // Filter results based on search criteria
    return mockResults.filter(result =>
        result.name.toLowerCase().includes(mirnaName.toLowerCase()) ||
        result.organism.toLowerCase() === organism.toLowerCase()
    );
}

// Display Search Results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');

    if (!results || results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Results Found</h3>
                <p>Try adjusting your search criteria or check the spelling of your miRNA name.</p>
            </div>
        `;
    } else {
        const resultsHTML = results.map(result => `
            <div class="result-card">
                <div class="result-header">
                    <div>
                        <div class="result-title">${result.name}</div>
                        <div class="result-subtitle">${result.organism} • ${result.genome_version} • ${result.chromosome}:${result.start}-${result.end}</div>
                    </div>
                    <div class="result-badge">${result.confidence}</div>
                </div>
                <div class="result-details">
                    <div class="detail-item">
                        <div class="detail-label">Strand</div>
                        <div class="detail-value">${result.strand}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">TSS Position</div>
                        <div class="detail-value">${result.tss}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Expression</div>
                        <div class="detail-value">${result.expression}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Target Genes</div>
                        <div class="detail-value">${result.target_genes}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Validated Targets</div>
                        <div class="detail-value">${result.validated_targets}</div>
                    </div>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;
    }

    searchResults.style.display = 'block';

    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.hero-icon, .hero-title, .hero-subtitle, .search-container').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}



// Update confidence styling
function updateConfidenceStyling(confidence) {
    const confidenceElement = document.getElementById('confidence');
    if (confidenceElement) {
        // Remove existing classes
        confidenceElement.classList.remove('high', 'low', 'medium');
        
        // Add appropriate class
        const confidenceLower = confidence.toLowerCase();
        if (confidenceLower === 'high') {
            confidenceElement.classList.add('high');
        } else if (confidenceLower === 'low') {
            confidenceElement.classList.add('low');
        } else {
            confidenceElement.classList.add('medium');
        }
    }
}

// Initialize Click-to-Copy Functionality
function initializeClickToCopy() {
    // Handle regular info values
    const infoValues = document.querySelectorAll('.info-value');
    
    infoValues.forEach(element => {
        element.addEventListener('click', function(e) {
            // Don't copy if clicking on sequence text, copyable items, or confidence
            if (e.target.classList.contains('sequence-text') || 
                e.target.classList.contains('copyable-item') ||
                this.id === 'confidence') {
                return;
            }
            
            const textToCopy = this.textContent.trim();
            let displayLength = null;
            
            // Special handling for coordinates to show length
            if (this.id === 'preMirnaCoordinates' || this.id === 'matureCoordinates' || 
                textToCopy.includes('chr') && textToCopy.includes(':')) {
                displayLength = calculateCoordinateLength(textToCopy);
                if (displayLength !== null) {
                    displayLength = `${displayLength} bp`; // Show as base pairs for coordinates
                }
            }
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    if (displayLength !== null) {
                        showCopySuccessWithLength(this, displayLength);
                    } else {
                        showCopySuccess(this);
                    }
                }).catch(() => {
                    if (displayLength !== null) {
                        fallbackCopyTextToClipboardWithLength(textToCopy, this, displayLength);
                    } else {
                        fallbackCopyTextToClipboard(textToCopy, this);
                    }
                });
            } else {
                if (displayLength !== null) {
                    fallbackCopyTextToClipboardWithLength(textToCopy, this, displayLength);
                } else {
                    fallbackCopyTextToClipboard(textToCopy, this);
                }
            }
        });
    });
    
    // Handle sequence text (copy only the sequence)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('sequence-text')) {
            const textToCopy = e.target.textContent.trim();
            const sequenceLength = textToCopy.length;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopySuccessWithLength(e.target, sequenceLength);
                }).catch(() => {
                    fallbackCopyTextToClipboardWithLength(textToCopy, e.target, sequenceLength);
                });
            } else {
                fallbackCopyTextToClipboardWithLength(textToCopy, e.target, sequenceLength);
            }
        }
        
        // Handle copyable items (individual items in multi-line values)
        if (e.target.classList.contains('copyable-item')) {
            let textToCopy = e.target.textContent.trim();
            let displayLength = textToCopy.length;
            
            // Extract just the sequence from "5' - SEQUENCE - 3'" format
            if (textToCopy.includes("5' -") && textToCopy.includes("- 3'")) {
                textToCopy = textToCopy.replace("5' - ", "").replace(" - 3'", "");
                displayLength = textToCopy.length;
            } else if (/^chr\d+:\d{1,3}(?:,\d{3})*-\d{1,3}(?:,\d{3})*\([+-]\)$/.test(textToCopy)) {
                // Coordinate string: compute genomic length in base pairs
                const bpLen = calculateCoordinateLength(textToCopy);
                if (bpLen !== null) {
                    displayLength = `${bpLen} bp`;
                }
            }
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopySuccessWithLength(e.target, displayLength);
                }).catch(() => {
                    fallbackCopyTextToClipboardWithLength(textToCopy, e.target, displayLength);
                });
            } else {
                fallbackCopyTextToClipboardWithLength(textToCopy, e.target, displayLength);
            }
        }
    });
}

// Show Copy Success
function showCopySuccess(element) {
    element.classList.add('copied');
    
    setTimeout(() => {
        element.classList.remove('copied');
    }, 2000);
}

// Show Copy Success with Length
function showCopySuccessWithLength(element, length) {
    element.classList.add('copied');
    
    // Create and show length tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'copy-length-tooltip';
    
    // Determine the unit to display
    let unit = 'nt'; // Default to nucleotides
    if (typeof length === 'string' && length.includes('bp')) {
        unit = ''; // Don't add unit if it's already included
        tooltip.textContent = length;
    } else {
        tooltip.textContent = `${length} ${unit}`;
    }
    
    tooltip.style.cssText = `
        position: absolute;
        background: #28a745;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    
    // Position tooltip near the cursor
    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2) + 'px';
    tooltip.style.top = (rect.top - 40) + 'px';
    
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        element.classList.remove('copied');
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }, 2000);
}

// Fallback Copy Function
function fallbackCopyTextToClipboard(text, element) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(element);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

// Fallback Copy Function with Length
function fallbackCopyTextToClipboardWithLength(text, element, length) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccessWithLength(element, length);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

// Calculate coordinate length - Generic function for any miRNA coordinates
function calculateCoordinateLength(coordinateText) {
    // Parse coordinate format: chrX:start-end(strand) where X is chromosome number
    // Examples: chr9:94,175,957-94,176,036(+), chr19:41,234,567-41,234,647(+)
    const match = coordinateText.match(/chr\d+:(\d+(?:,\d+)*)-(\d+(?:,\d+)*)\(([+-])\)/);
    if (match) {
        const start = parseInt(match[1].replace(/,/g, ''));
        const end = parseInt(match[2].replace(/,/g, ''));
        const strand = match[3];
        
        let length;
        if (strand === '+') {
            length = end - start;
        } else {
            length = start - end;
        }
        
        // Always add 1 to the calculated length for all coordinate calculations
        return length + 1;
    }
    return null;
}

// Initialize Details Button Functionality
function initializeDetailsButton() {
    const detailsBtn = document.getElementById('mainTssDetails');
    
    if (detailsBtn) {
        detailsBtn.addEventListener('click', function() {
            showMainTssDetails();
        });
    }
}

// Show Main TSS Details
function showMainTssDetails() {
    const supportingEvidence = document.getElementById('supportingEvidence');
    const hostGeneInfo = document.getElementById('hostGeneInfo');
    const detailsBtn = document.getElementById('mainTssDetails');
    
    if (supportingEvidence && hostGeneInfo && detailsBtn) {
        const isVisible = supportingEvidence.style.display !== 'none';
        
        if (isVisible) {
            // Hide both sections
            supportingEvidence.style.display = 'none';
            hostGeneInfo.style.display = 'none';
            detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> Show Details';
            detailsBtn.classList.remove('active');
        } else {
            // Show both sections
            supportingEvidence.style.display = 'block';
            hostGeneInfo.style.display = 'block';
            detailsBtn.innerHTML = '<i class="fas fa-times"></i> Hide Details';
            detailsBtn.classList.add('active');
        }
    }
}

// Function to set host gene information (call this when data is available)
function setHostGeneInfo(hasHostGene, hostGeneData = null) {
    const hostGeneInfoContent = document.getElementById('hostGeneInfoContent');
    const noHostGeneContent = document.getElementById('noHostGeneContent');
    
    if (hasHostGene && hostGeneData && hostGeneInfoContent && noHostGeneContent) {
        // Show host gene information
        hostGeneInfoContent.style.display = 'block';
        noHostGeneContent.style.display = 'none';
        
        // Update the values if provided
        if (hostGeneData.id) {
            document.querySelector('#hostGeneInfoContent .info-item:nth-child(1) .info-value').textContent = hostGeneData.id;
        }
        if (hostGeneData.name) {
            document.querySelector('#hostGeneInfoContent .info-item:nth-child(2) .info-value').textContent = hostGeneData.name;
        }
        if (hostGeneData.type) {
            document.querySelector('#hostGeneInfoContent .info-item:nth-child(3) .info-value').textContent = hostGeneData.type;
        }
    } else if (!hasHostGene && hostGeneInfoContent && noHostGeneContent) {
        // Show "no host gene" message
        hostGeneInfoContent.style.display = 'none';
        noHostGeneContent.style.display = 'block';
    }
}

// Export functions for use in other scripts
window.HomePage = {
    initializeHomePage,
    performSearch,
    displaySearchResults,
    showNotification
}; 

// Show Mock Data Message for non-let-7a miRNAs
function showMockDataMessage(mirnaName, organismVersion) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    // Update the miRNA display name
    const mirnaDisplayName = document.getElementById('mirnaDisplayName');
    if (mirnaDisplayName) {
        mirnaDisplayName.textContent = mirnaName;
    }
    
    // Show a message that this is mock data
    searchResults.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <h3 class="result-title">
                    <i class='bx bx-info-circle'></i>
                    Mock Data for <span id="mirnaDisplayName">${mirnaName}</span>
                </h3>
            </div>
            <div class="result-content">
                <div class="alert alert-info" role="alert">
                    <h4 class="alert-heading">
                        <i class="fas fa-info-circle me-2"></i>
                        Database Not Yet Connected
                    </h4>
                    <p>This is currently showing mock data. The search functionality will be fully operational once the PostgreSQL database is connected.</p>
                    <hr>
                    <p class="mb-0">
                        <strong>Search Query:</strong> ${mirnaName}<br>
                        <strong>Organism:</strong> ${organismVersion}<br>
                        <strong>Status:</strong> Mock data mode
                    </p>
                </div>
                
                <div class="text-center mt-4">
                    <p class="text-muted">
                        <i class="fas fa-database me-2"></i>
                        Database connection pending
                    </p>
                    <button class="btn btn-primary" onclick="showExampleResults()">
                        <i class="fas fa-lightbulb me-2"></i>
                        View Example Data (hsa-let-7a-1)
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Show the results container
    searchResults.style.display = 'grid';
    
    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Copy Main TSS Position
function copyMainTssPosition() {
    const mainTssRow = document.querySelector('#mainTssData');
    const chromosome = document.querySelector('#mainTssData .table-cell:nth-child(1)').textContent;
    const position = document.querySelector('#mainTssData .table-cell:nth-child(2)').textContent;
    const strand = document.querySelector('#mainTssData .table-cell:nth-child(3)').textContent;
    
    const positionFormat = `${chromosome}:${position}(${strand})`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(positionFormat).then(() => {
            showCopySuccess(mainTssRow);
        }).catch(() => {
            fallbackCopyTextToClipboard(positionFormat, mainTssRow);
        });
    } else {
        fallbackCopyTextToClipboard(positionFormat, mainTssRow);
    }
}

// Copy Alternative TSS Position
function copyAltTssPosition(tssNumber) {
    const altTssRow = document.querySelector(`#altTss${tssNumber}`);
    const position = document.querySelector(`#altTss${tssNumber} .table-cell:nth-child(2)`).textContent;
    const strand = document.querySelector(`#altTss${tssNumber} .table-cell:nth-child(3)`).textContent;
    
    // Use the same chromosome as Main TSS for consistency
    const chromosome = 'chr9';
    
    const positionFormat = `${chromosome}:${position}(${strand})`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(positionFormat).then(() => {
            showCopySuccess(altTssRow);
        }).catch(() => {
            fallbackCopyTextToClipboard(positionFormat, altTssRow);
        });
    } else {
        fallbackCopyTextToClipboard(positionFormat, altTssRow);
    }
}

// Show Alternative TSS Details on click
function showAltTssDetails(tssNumber, event) {
    event.stopPropagation(); // Prevent row click event from triggering
    
    const detailsSection = document.getElementById(`altTssDetails${tssNumber}`);
    
    // Toggle visibility for the specific TSS details
    if (detailsSection.style.display === 'none') {
        detailsSection.style.display = 'block';
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        detailsSection.style.display = 'none';
    }
}

// Toggle Alternative TSS container from title click
function toggleAltTssContainer() {
    const altTssContent = document.getElementById('altTssContent');
    const altTssToggle = document.getElementById('altTssToggle');
    const altTssCard = document.getElementById('altTssHeader').closest('.collapsible-card');
    
    toggleCollapsible(altTssContent, altTssToggle, altTssCard);
}

// Toggle Transcription Factors container from title click
function toggleTfContainer() {
    const tfContent = document.getElementById('tfContent');
    const tfToggle = document.getElementById('tfToggle');
    const tfCard = document.getElementById('tfHeader').closest('.collapsible-card');
    
    toggleCollapsible(tfContent, tfToggle, tfCard);
    
    // Initialize TF filters when container is opened
    if (tfContent.style.display === 'block') {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            initializeTFFilters();
        }, 100);
    }
}

// Mock TF data for testing (will be replaced with database data later)
const mockTFData = [
    { name: 'SP1', start: '94,166,250', end: '94,166,270', score: 0.89, type: 'Cell line' },
    { name: 'AP-1', start: '94,166,280', end: '94,166,300', score: 0.76, type: 'Brain' },
    { name: 'NF-κB', start: '94,166,400', end: '94,166,425', score: 0.82, type: 'Liver' },
    { name: 'MYC', start: '94,166,500', end: '94,166,520', score: 0.91, type: 'Cell line' },
    { name: 'CTCF', start: '94,166,600', end: '94,166,625', score: 0.78, type: 'Heart' },
    { name: 'E2F1', start: '94,166,700', end: '94,166,720', score: 0.85, type: 'Kidney' },
    { name: 'STAT3', start: '94,166,800', end: '94,166,825', score: 0.73, type: 'Brain' },
    { name: 'CREB', start: '94,166,900', end: '94,166,925', score: 0.88, type: 'Liver' },
    { name: 'FOXO1', start: '94,167,000', end: '94,167,020', score: 0.79, type: 'Heart' },
    { name: 'HIF1A', start: '94,167,100', end: '94,167,125', score: 0.92, type: 'Cell line' },
    { name: 'PPARG', start: '94,167,200', end: '94,167,225', score: 0.81, type: 'Kidney' },
    { name: 'SREBF1', start: '94,167,300', end: '94,167,325', score: 0.87, type: 'Brain' },
    { name: 'NRF2', start: '94,167,400', end: '94,167,425', score: 0.84, type: 'Liver' },
    { name: 'TP53', start: '94,167,500', end: '94,167,525', score: 0.95, type: 'Cell line' },
    { name: 'RB1', start: '94,167,600', end: '94,167,625', score: 0.77, type: 'Heart' },
    { name: 'BRCA1', start: '94,167,700', end: '94,167,725', score: 0.86, type: 'Cell line' },
    { name: 'ATM', start: '94,167,800', end: '94,167,825', score: 0.83, type: 'Brain' },
    { name: 'CHEK2', start: '94,167,900', end: '94,167,925', score: 0.79, type: 'Liver' },
    { name: 'PARP1', start: '94,168,000', end: '94,168,025', score: 0.88, type: 'Heart' },
    { name: 'XRCC1', start: '94,168,100', end: '94,168,125', score: 0.75, type: 'Kidney' },
    { name: 'LIG4', start: '94,168,200', end: '94,168,225', score: 0.82, type: 'Cell line' },
    { name: 'KU70', start: '94,168,300', end: '94,168,325', score: 0.89, type: 'Brain' },
    { name: 'KU80', start: '94,168,400', end: '94,168,425', score: 0.91, type: 'Liver' },
    { name: 'DNAPK', start: '94,168,500', end: '94,168,525', score: 0.87, type: 'Heart' },
    { name: 'RAD51', start: '94,168,600', end: '94,168,625', score: 0.93, type: 'Kidney' },
    { name: 'BRCA2', start: '94,168,700', end: '94,168,725', score: 0.85, type: 'Cell line' },
    { name: 'PALB2', start: '94,168,800', end: '94,168,825', score: 0.78, type: 'Brain' },
    { name: 'FANCD2', start: '94,168,900', end: '94,168,925', score: 0.81, type: 'Liver' },
    { name: 'FANCA', start: '94,169,000', end: '94,169,025', score: 0.76, type: 'Heart' },
    { name: 'FANCC', start: '94,169,100', end: '94,169,125', score: 0.84, type: 'Kidney' },
    { name: 'FANCE', start: '94,169,200', end: '94,169,225', score: 0.79, type: 'Cell line' },
    { name: 'FANCF', start: '94,169,300', end: '94,169,325', score: 0.86, type: 'Brain' },
    { name: 'FANCG', start: '94,169,400', end: '94,169,425', score: 0.88, type: 'Liver' },
    { name: 'FANCL', start: '94,169,500', end: '94,169,525', score: 0.82, type: 'Heart' },
    { name: 'FANCM', start: '94,169,600', end: '94,169,625', score: 0.90, type: 'Kidney' },
    { name: 'FANCN', start: '94,169,700', end: '94,169,725', score: 0.77, type: 'Cell line' },
    { name: 'FANCO', start: '94,169,800', end: '94,169,825', score: 0.85, type: 'Brain' },
    { name: 'FANCP', start: '94,169,900', end: '94,169,925', score: 0.83, type: 'Liver' },
    { name: 'FANCQ', start: '94,170,000', end: '94,170,025', score: 0.89, type: 'Heart' },
    { name: 'FANCR', start: '94,170,100', end: '94,170,125', score: 0.91, type: 'Kidney' },
    { name: 'FANCS', start: '94,170,200', end: '94,170,225', score: 0.87, type: 'Cell line' },
    { name: 'FANCT', start: '94,170,300', end: '94,170,325', score: 0.80, type: 'Brain' },
    { name: 'FANCU', start: '94,170,400', end: '94,170,425', score: 0.86, type: 'Liver' },
    { name: 'FANCV', start: '94,170,500', end: '94,170,525', score: 0.92, type: 'Heart' },
    { name: 'FANCW', start: '94,170,600', end: '94,170,625', score: 0.79, type: 'Kidney' },
    { name: 'FANCX', start: '94,170,700', end: '94,170,725', score: 0.88, type: 'Cell line' },
    { name: 'FANCY', start: '94,170,800', end: '94,170,825', score: 0.84, type: 'Brain' },
    { name: 'FANCZ', start: '94,170,900', end: '94,170,925', score: 0.90, type: 'Liver' }
];

// TF Filter Manager Class
class TFFilterManager {
    constructor() {
        this.currentPage = 1;
        this.pageSize = 10; // Show 10 rows per page for better balance
        this.filters = {
            type: [],
            scoreMin: 0,
            scoreMax: 1
        };
        this.debounceTimer = null;
        this.filteredData = [...mockTFData];
        
        this.initializeEventListeners();
        this.loadResults(); // Load initial data
    }
    
    initializeEventListeners() {
        // TF Type filter - handle custom multiselect toggle and checkboxes
        const multiselectToggle = document.querySelector('.multiselect-toggle');
        const multiselectDropdown = document.querySelector('.multiselect-dropdown');
        
        // Toggle dropdown on button click
        multiselectToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            multiselectDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!multiselectToggle.contains(e.target) && !multiselectDropdown.contains(e.target)) {
                multiselectDropdown.classList.remove('show');
            }
        });
        
        // Handle checkbox changes
        document.querySelectorAll('.multiselect-item input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateTfTypeSelection();
            });
        });
        
        // Initialize the TF Type selection display
        this.updateTfTypeSelection();
        
        // Score range filters
        document.getElementById('scoreMin').addEventListener('input', (e) => {
            this.filters.scoreMin = parseFloat(e.target.value);
            document.getElementById('scoreMinValue').textContent = e.target.value;
            this.debounceFilterUpdate();
        });
        
        document.getElementById('scoreMax').addEventListener('input', (e) => {
            this.filters.scoreMax = parseFloat(e.target.value);
            document.getElementById('scoreMaxValue').textContent = e.target.value;
            this.debounceFilterUpdate();
        });
        
        // Apply filters button
        document.getElementById('applyFilters').addEventListener('click', () => {
            this.currentPage = 1;
            this.loadResults();
        });
        
        // Reset filters button
        document.getElementById('resetFilters').addEventListener('click', () => {
            this.resetFilters();
        });
        
        // Download button and dropdown
        this.initializeDownloadFunctionality();
        
        // Pagination
        document.getElementById('prevPage').addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadResults();
            }
        });
        
        document.getElementById('nextPage').addEventListener('click', () => {
            const totalPages = Math.ceil(this.filteredData.length / this.pageSize);
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.loadResults();
            }
        });
    }
    
    updateTfTypeSelection() {
        const selectedOptions = Array.from(document.querySelectorAll('.multiselect-item input[type="checkbox"]:checked'))
            .map(cb => cb.value);
        
        this.filters.type = selectedOptions;
        
        // Update the display text
        const selectedText = document.querySelector('.selected-text');
        if (selectedOptions.length === 0) {
            selectedText.textContent = 'No Types Selected';
        } else if (selectedOptions.length === 5) {
            selectedText.textContent = 'All Types';
        } else {
            selectedText.textContent = `${selectedOptions.length} Types Selected`;
        }
        
        this.debounceFilterUpdate();
    }
    
    initializeDownloadFunctionality() {
        const downloadBtn = document.getElementById('downloadBtn');
        const dropdownToggle = document.querySelector('.dropdown-toggle-split');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        
        console.log('Download button found:', downloadBtn);
        console.log('Dropdown toggle found:', dropdownToggle);
        console.log('Dropdown menu found:', dropdownMenu);
        
        // Click on Download button downloads TSV directly
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadData('tsv');
        });
        
        // Handle format selection from dropdown
        document.querySelectorAll('.dropdown-item').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const format = e.currentTarget.dataset.format;
                console.log('Download format selected:', format);
                this.downloadData(format);
            });
        });
        
        // Manual dropdown toggle since Bootstrap might not be working
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle dropdown manually
                const isOpen = dropdownMenu.classList.contains('show');
                if (isOpen) {
                    dropdownMenu.classList.remove('show');
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                } else {
                    dropdownMenu.classList.add('show');
                    dropdownToggle.setAttribute('aria-expanded', 'true');
                }
                
                console.log('Manual dropdown toggle:', isOpen ? 'closed' : 'opened');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove('show');
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    downloadData(format = 'tsv') {
        if (this.filteredData.length === 0) {
            alert('No data to download');
            return;
        }
        
        let content = '';
        // Get miRNA name from the page or use default
        const mirnaName = document.getElementById('mirnaDisplayName')?.textContent || 'miRNA';
        let filename = `${mirnaName}_TF`;
        
        switch (format) {
            case 'tsv':
                content = this.convertToTSV();
                filename += '.tsv';
                break;
            case 'csv':
                content = this.convertToCSV();
                filename += '.csv';
                break;
            case 'excel':
                content = this.convertToCSV(); // Excel can read CSV
                filename += '.csv';
                break;
            default:
                content = this.convertToTSV();
                filename += '.tsv';
        }
        
        this.downloadFile(content, filename);
    }
    
    convertToTSV() {
        const headers = ['TF Name', 'Start', 'End', 'Score', 'Type'];
        const rows = [headers.join('\t')];
        
        this.filteredData.forEach(tf => {
            rows.push([tf.name, tf.start, tf.end, tf.score, tf.type].join('\t'));
        });
        
        return rows.join('\n');
    }
    
    convertToCSV() {
        const headers = ['TF Name', 'Start', 'End', 'Score', 'Type'];
        const rows = [headers.join(',')];
        
        this.filteredData.forEach(tf => {
            rows.push([tf.name, tf.start, tf.end, tf.score, tf.type].join(','));
        });
        
        return rows.join('\n');
    }
    
    downloadFile(content, filename) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
    
    debounceFilterUpdate() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.currentPage = 1; // Reset to first page
            this.applyFilters();
        }, 300); // 300ms delay
    }
    
    applyFilters() {
        this.filteredData = mockTFData.filter(tf => {
            // Type filter - handle multiple selections
            if (this.filters.type && this.filters.type.length > 0) {
                if (!this.filters.type.includes(tf.type)) {
                    return false;
                }
            }
            
            // Score range filter
            if (tf.score < this.filters.scoreMin || tf.score > this.filters.scoreMax) {
                return false;
            }
            
            return true;
        });
        
        this.loadResults();
    }
    
    resetFilters() {
        // Reset filter values
        document.querySelectorAll('.multiselect-item input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = true; // Reset to all checked
        });
        document.getElementById('scoreMin').value = 0;
        document.getElementById('scoreMax').value = 1;
        document.getElementById('scoreMinValue').textContent = '0';
        document.getElementById('scoreMaxValue').textContent = '1';
        
        // Reset filter state
        this.filters = {
            type: [],
            scoreMin: 0,
            scoreMax: 1
        };
        
        // Reset data and pagination
        this.filteredData = [...mockTFData];
        this.currentPage = 1;
        this.loadResults();
        
        // Update the TF Type selection display
        this.updateTfTypeSelection();
    }
    
    loadResults() {
        // Calculate pagination
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const pageData = this.filteredData.slice(startIndex, endIndex);
        
        this.renderResults(pageData);
        this.updatePagination();
        this.updateResultsSummary();
    }
    
    renderResults(data) {
        const tbody = document.getElementById('tfTableBody');
        tbody.innerHTML = '';
        
        if (data.length === 0) {
            tbody.innerHTML = `
                <div class="table-row">
                    <div class="table-cell" colspan="5" style="text-align: center; padding: 2rem;">
                        No results found with the current filters
                    </div>
                </div>
            `;
            return;
        }
        
        data.forEach(tf => {
            const row = document.createElement('div');
            row.className = 'table-row';
            row.innerHTML = `
                <div class="table-cell">${tf.name}</div>
                <div class="table-cell">${tf.start}</div>
                <div class="table-cell">${tf.end}</div>
                <div class="table-cell">${tf.score}</div>
                <div class="table-cell">${tf.type}</div>
            `;
            tbody.appendChild(row);
        });
    }
    
    updatePagination() {
        const totalPages = Math.ceil(this.filteredData.length / this.pageSize);
        
        document.getElementById('pageInfo').textContent = 
            `Page ${this.currentPage} of ${totalPages}`;
        
        document.getElementById('prevPage').disabled = this.currentPage <= 1;
        document.getElementById('nextPage').disabled = this.currentPage >= totalPages;
    }
    
    updateResultsSummary() {
        document.getElementById('currentCount').textContent = 
            Math.min(this.pageSize, this.filteredData.length);
        document.getElementById('totalCount').textContent = this.filteredData.length;
    }
}

// Initialize Data Service and TF Filter Manager when the page loads
let tfFilterManager = null;

// Function to initialize TF filters (called when TF container is opened)
function initializeTFFilters() {
    if (!tfFilterManager) {
        tfFilterManager = new TFFilterManager();
    }
}



