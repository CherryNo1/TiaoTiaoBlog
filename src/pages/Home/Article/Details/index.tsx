import { useParams } from "react-router-dom";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import { Anchor, Col, Divider, Image, Layout, Menu, Row, theme } from "antd";
import WangEditorComp from "@/components/MarkdownComp/WangEditComp";
import utils from "@/utils";
import { ArticleApi } from "@/api";
import { Editor } from "@wangeditor/editor-for-react";
import { Base64 } from "js-base64";
const markdown = `
# 一号标题
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nobis dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!
## 二号标题
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nobis dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nobis dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### 三号标题
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad tempore blanditiis mollitia, eaque ab quasi aliquam veniam sint magni, consectetur voluptatibus repudiandae at cumque laboriosam, minima praesentium nulla enim?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nobis dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad tempore blanditiis mollitia, eaque ab quasi aliquam veniam sint magni, consectetur voluptatibus repudiandae at cumque laboriosam, minima praesentium nulla enim?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nobis dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!

#### 四号标题
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa exercitationem voluptas tempore porro eaque in inventore! Fugit quibusdam id sit numquam, dolores corporis eaque totam! Rem a mollitia fugiat voluptates sint quibusdam, autem officiis qui saepe ratione, assumenda alias iure. Neque explicabo non perferendis, deserunt harum modi dolore doloremque enim omnis quasi recusandae debitis culpa possimus reprehenderit iure reiciendis ipsa quaerat expedita optio delectus, asperiores rerum blanditiis? Libero minima porro suscipit quaerat, rerum velit et soluta laborum sunt quod sequi doloribus ea, alias aut nesciunt eius maxime nostrum eveniet ipsam fuga saepe pariatur illum neque? Labore animi laudantium delectus?

# 一号标题
amet consectetur adipisicing elit. Maiores ad tempore blanditiis mollitia, eaque ab quasi aliquam veniam sint magni, consectetur voluptatibus repudiandae at cumque laboriosam, minima praesentium nulla enim?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nobis dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad tempore blanditiis mollitia, eaque ab quasi aliquam veniam sint magni, consectetur voluptatibus repudiandae at cumque laboriosam, minima praesentium nulla enim?
Lorem, ipsum dolor sit
#### 四号标题
dolorum, aliquam, iure, officiis cumque provident id nisi beatae eius consequuntur ad fuga facere ut? Quos expedita soluta velit reprehenderit quisquam, sapiente suscipit est ab blanditiis voluptatum magni itaque recusandae fugit ut, tempora aliquam fuga! Laboriosam voluptas, eligendi molestias incidunt quisquam aperiam soluta dolor placeat quaerat eos ex hic nemo ab, cum debitis consequuntur corporis eveniet modi. Commodi ea animi, iure tenetur, ex totam quae nesciunt, pariatur quam nemo laborum? Dolorum deleniti necessitatibus officia. Libero voluptatibus veritatis qui labore quia eveniet, facilis sed sint placeat omnis sequi laborum non!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad tempore blanditiis mollitia, eaque ab quasi aliquam veniam sint magni, consectetur voluptatibus repudiandae at cumque laboriosam, minima praesentium nulla enim?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vol
两三个数据源、事务场景比较少，基于 SpringBoot 的多数据源组件，功能强悍，支持 Seata 分布式事务。

支持数据源分组，适用于多种场景纯粹多库 读写分离 一主多从 混合模式。
支持数据库敏感配置信息加密 ENC()。
支持每个数据库独立初始化表结构schema和数据库database。
支持无数据源启动，支持懒加载数据源（需要的时候再创建连接）。
支持自定义注解，需继承DS(3.2.0+)。
提供并简化对Druid，HikariCp，BeeCp，Dbcp2的快速集成。
提供对Mybatis­Plus，Quartz，ShardingJdbc，P6sy，Jndi等组件的集成方案。
提供自定义数据源来源方案（如全从数据库加载）。
提供项目启动后动态增加移除数据源方案。
提供Mybatis环境下的纯读写分离方案。
提供使用spel动态参数解析数据源方案。内置spel，session，header，支持自定义。
支持多层数据源嵌套切换 。（ServiceA >>> ServiceB >>> ServiceC）。
提供基于seata的分布式事务方案。
提供本地多数据源事务方案。 附：不能和原生spring事务混用。
🍀（1）约定

（1）本框架只做切换数据源 这件核心的事情，并不限制你的具体操作，切换了数据源可以做任何CRUD。
（2）配置文件所有以下划线 _ 分割的数据源 首部 即为组的名称，相同组名称的数据源会放在一个组下。
（3）切换数据源可以是组名，也可以是具体数据源名称。组名则切换时采用负载均衡算法切换,默认是轮询的。
（4）默认的数据源名称为 master ，你可以通过 spring.datasource.dynamic.primary 修改。
（5）方法上的注解优先于类上注解。
（6）DS支持继承抽象类上的DS，暂不支持继承接口上的DS。
* Listsimport { ReactMarkdown } from 'react-markdown';
* [ ] timport props from './../../../../components/MarkdownComp/Writer';
odo
* [x] done
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021060522035638.png)
只要@DSTransactional注解下任一环节发生异常，则全局多数据源事务回滚。
如果BC上也有@DSTransactional会有影响吗？答：没有影响的。

动态添加删除数据源：

通过DynamicRoutingDataSource 类即可，它就相当于我们之前自定义的那个DynamicDataSource。
~~~java
@RestController
@RequestMapping("/datasources")
@Api(tags = "添加删除数据源")
public class DataSourceController {
    @Autowired
    private DataSource dataSource;
    // private final DataSourceCreator dataSourceCreator; //3.3.1及以下版本使用这个通用
    @Autowired
    private DefaultDataSourceCreator dataSourceCreator;
    @Autowired
    private BasicDataSourceCreator basicDataSourceCreator;
    @Autowired
    private JndiDataSourceCreator jndiDataSourceCreator;
    @Autowired
    private DruidDataSourceCreator druidDataSourceCreator;
    @Autowired
    private HikariDataSourceCreator hikariDataSourceCreator;
    @Autowired
    private BeeCpDataSourceCreator beeCpDataSourceCreator;
    @Autowired
    private Dbcp2DataSourceCreator dbcp2DataSourceCreator;

    @GetMapping
    @ApiOperation("获取当前所有数据源")
    public Set<String> now() {
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        return ds.getCurrentDataSources().keySet();
    }

    //通用数据源会根据maven中配置的连接池根据顺序依次选择。
    //默认的顺序为druid>hikaricp>beecp>dbcp>spring basic
    @PostMapping("/add")
    @ApiOperation("通用添加数据源（推荐）")
    public Set<String> add(@Validated @RequestBody DataSourceDTO dto) {
        DataSourceProperty dataSourceProperty = new DataSourceProperty();
        BeanUtils.copyProperties(dto, dataSourceProperty);
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = dataSourceCreator.createDataSource(dataSourceProperty);
        ds.addDataSource(dto.getPollName(), dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @PostMapping("/addBasic(强烈不推荐，除了用了马上移除)")
    @ApiOperation(value = "添加基础数据源", notes = "调用Springboot内置方法创建数据源，兼容1,2")
    public Set<String> addBasic(@Validated @RequestBody DataSourceDTO dto) {
        DataSourceProperty dataSourceProperty = new DataSourceProperty();
        BeanUtils.copyProperties(dto, dataSourceProperty);
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = basicDataSourceCreator.createDataSource(dataSourceProperty);
        ds.addDataSource(dto.getPollName(), dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @PostMapping("/addJndi")
    @ApiOperation("添加JNDI数据源")
    public Set<String> addJndi(String pollName, String jndiName) {
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = jndiDataSourceCreator.createDataSource(jndiName);
        ds.addDataSource(pollName, dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @PostMapping("/addDruid")
    @ApiOperation("基础Druid数据源")
    public Set<String> addDruid(@Validated @RequestBody DataSourceDTO dto) {
        DataSourceProperty dataSourceProperty = new DataSourceProperty();
        BeanUtils.copyProperties(dto, dataSourceProperty);
        dataSourceProperty.setLazy(true);
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = druidDataSourceCreator.createDataSource(dataSourceProperty);
        ds.addDataSource(dto.getPollName(), dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @PostMapping("/addHikariCP")
    @ApiOperation("基础HikariCP数据源")
    public Set<String> addHikariCP(@Validated @RequestBody DataSourceDTO dto) {
        DataSourceProperty dataSourceProperty = new DataSourceProperty();
        BeanUtils.copyProperties(dto, dataSourceProperty);
        dataSourceProperty.setLazy(true);//3.4.0版本以下如果有此属性，需手动设置，不然会空指针。
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = hikariDataSourceCreator.createDataSource(dataSourceProperty);
        ds.addDataSource(dto.getPollName(), dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @PostMapping("/addBeeCp")
    @ApiOperation("基础BeeCp数据源")
    public Set<String> addBeeCp(@Validated @RequestBody DataSourceDTO dto) {
        DataSourceProperty dataSourceProperty = new DataSourceProperty();
        BeanUtils.copyProperties(dto, dataSourceProperty);
        dataSourceProperty.setLazy(true);//3.4.0版本以下如果有此属性，需手动设置，不然会空指针。
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = beeCpDataSourceCreator.createDataSource(dataSourceProperty);
        ds.addDataSource(dto.getPollName(), dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @PostMapping("/addDbcp")
    @ApiOperation("基础Dbcp数据源")
    public Set<String> addDbcp(@Validated @RequestBody DataSourceDTO dto) {
        DataSourceProperty dataSourceProperty = new DataSourceProperty();
        BeanUtils.copyProperties(dto, dataSourceProperty);
        dataSourceProperty.setLazy(true);//3.4.0版本以下如果有此属性，需手动设置，不然会空指针。
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        DataSource dataSource = dbcp2DataSourceCreator.createDataSource(dataSourceProperty);
        ds.addDataSource(dto.getPollName(), dataSource);
        return ds.getCurrentDataSources().keySet();
    }

    @DeleteMapping
    @ApiOperation("删除数据源")
    public String remove(String name) {
        DynamicRoutingDataSource ds = (DynamicRoutingDataSource) dataSource;
        ds.removeDataSource(name);
        return "删除成功";
    }
}
~~~
java
~~~java
@MapperScan(basePackages = "com.tuling.dynamic.datasource.mapper.w", sqlSessionFactoryRef = "wSqlSessionFactory")
public class WDataSourceConfig {
    @Bean
    @Primary
    public SqlSessionFactory wSqlSessionFactory(@Qualifier("dataSource1") DataSource dataSource1) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource1);
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mapper/w/*.xml"));
        /*主库设置sql控制台打印*/
        org.apache.ibatis.session.Configuration configuration = new org.apache.ibatis.session.Configuration();
        configuration.setLogImpl(StdOutImpl.class);
        sessionFactory.setConfiguration(configuration);
        return sessionFactory.getObject();
    }
}
~~~
###### 六号标题
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt temporibus illum quisquam nemo, error quae ipsum a dolorum inventore incidunt officiis provident quis aliquam esse cum odio voluptate, beatae corrupti saepe quidem sed alias qui cumque iure. Eaque atque quisquam tempora maiores iusto aperiam distinctio consequatur exercitationem nesciunt ipsa, mollitia totam reiciendis porro facere, quidem, velit modi enim cumque voluptate eius sapiente nemo. Aut accusantium ullam velit officia. Neque maxime quos laboriosam voluptates natus temporibus eligendi explicabo aliquam, doloremque nisi alias deleniti autem nesciunt magnam similique aperiam debitis dolor, error nostrum cum, nemo fugit impedit. Ipsa dolore voluptates autem. Labore!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae illum dolore corporis unde. Dicta quod eius nemo consectetur porro animi optio cupiditate nostrum id sunt est, voluptate nesciunt expedita nobis, deserunt dolor magni enim. Maiores aut architecto officia cupiditate sed maxime facilis dignissimos? Natus, tempora hic corporis necessitatibus sequi dolore iure debitis facilis nam fugiat aspernatur earum laboriosam nesciunt adipisci neque, accusantium animi? Ex vitae temporibus adipisci incidunt, aperiam aut at sed iusto eaque quasi, impedit necessitatibus inventore modi consectetur labore aliquam fugit, veniam minus illo cum beatae? Accusamus cumque eius cupiditate a quo reiciendis voluptate autem itaque. Modi incidunt consequuntur harum optio a dolores eum, sint sapiente ratione! Ad est tenetur tempora repellendus, sint deserunt quidem commodi itaque? Nam, quibusdam a? Nemo aliquam facere adipisci, repellat aspernatur dignissimos minima dolor, facilis quod animi possimus sapiente culpa cum, dolores vel ipsa recusandae pariatur maiores aut at. Amet corporis beatae, praesentium in perspiciatis totam veritatis commodi quibusdam eveniet fuga aut odio consectetur reiciendis asperiores autem vitae eligendi ipsum. Consequatur facere excepturi aspernatur ipsam laudantium aperiam vero hic, nesciunt eos repudiandae iste, tempore ipsum dolorum odio sit at, non voluptate reprehenderit neque dolores. Esse sunt minima sequi ducimus sint veritatis repellat, odio ex similique laboriosam perspiciatis eos delectus consequatur mollitia eius, rem possimus ratione officia quis beatae earum sapiente. Provident corrupti quos quasi unde. Perferendis dolorum ad, eligendi repudiandae optio omnis necessitatibus? Distinctio ipsum, necessitatibus fugiat culpa impedit reprehenderit debitis architecto iste mollitia obcaecati expedita inventore quasi libero ipsam quos quibusdam quod vel eum perspiciatis natus ducimus corrupti. Minus, perferendis. Beatae in reprehenderit ea voluptas exercitationem? Quia, qui? Rem, repudiandae excepturi. Repudiandae repellat ea sit sint facere excepturi veritatis cupiditate. Repudiandae aspernatur, vel debitis quae quia eum quam dicta perspiciatis assumenda aut magni quasi eligendi maxime nisi excepturi, sit nulla facere, laboriosam eos ex atque quod a quis dignissimos. Similique blanditiis adipisci minus, consectetur at placeat modi et, omnis ex eum neque corporis est dignissimos ipsa sapiente dicta, architecto saepe? Corrupti rem laboriosam corporis vel quam quas modi minima, reiciendis dolorum perspiciatis molestiae laborum doloremque beatae repudiandae eaque. Officiis aspernatur dolore dolor aut quia ducimus. Fuga laboriosam, atque velit repellendus expedita minus excepturi. Praesentium beatae eligendi quas aut rerum hic, autem voluptatibus consequuntur accusantium sequi iste explicabo in ratione ipsam? Sed quod ut magnam autem nisi itaque perferendis fuga culpa, nam voluptates hic non, ipsa unde mollitia aliquam quia ipsam iure impedit in quas? Nostrum, quidem ea quae facilis blanditiis debitis! Excepturi commodi saepe ratione molestias? Soluta fuga, voluptates corporis veniam quidem, modi qui recusandae tempore dolor repellendus eaque expedita perferendis, repellat atque nihil praesentium doloremque illo error omnis ipsum exercitationem deleniti! Quae, architecto eos dignissimos quod laborum voluptatibus velit debitis iusto distinctio pariatur quisquam magni cum eveniet culpa laboriosam voluptates! Sunt soluta ratione consequuntur error, quas odit. Nihil eaque consequatur molestiae perspiciatis minima, reiciendis, eos ipsa tempore hic odio, quis expedita recusandae a harum voluptas? Possimus, quas nulla accusamus tempore placeat maxime reprehenderit minus voluptates ipsum obcaecati, eos molestiae modi! Repudiandae, impedit eius! Excepturi eligendi sint consequatur omnis et corrupti incidunt, nam pariatur. Inventore velit voluptatibus incidunt soluta maiores eligendi eveniet necessitatibus suscipit recusandae vero mollitia magni quo ipsam, ex culpa, debitis cupiditate repellat iure molestiae quibusdam veritatis error fugiat beatae. Tempora distinctio animi tempore blanditiis ipsam dolores itaque! Incidunt impedit labore itaque, libero dolores repellat suscipit, placeat recusandae perspiciatis animi autem quas quam ipsam aperiam, est quos tenetur consequuntur amet laborum quis laboriosam nostrum adipisci vitae. Libero temporibus deserunt odit mollitia inventore labore incidunt voluptatem quo tenetur quae qui repellat quidem nobis exercitationem dicta dolore asperiores natus minus, molestias dolor error vel rerum. Obcaecati fuga aut distinctio eveniet in ipsum modi maiores? Harum recusandae neque perspiciatis nam, vitae at reiciendis beatae facere quibusdam dignissimos impedit eveniet magnam dolore hic quod cum commodi sequi nisi officia assumenda ex libero minus natus deleniti! Eligendi, labore molestias neque culpa non et vel dolores! Doloribus asperiores, maiores aspernatur necessitatibus sequi qui laboriosam tenetur quae cupiditate debitis ipsum esse iste ex suscipit rem quasi? Laborum reprehenderit fugiat recusandae! Eius nulla nisi incidunt itaque dolor doloribus delectus doloremque ab ut eum iure maxime harum maiores adipisci quae quam, beatae facilis? Fuga culpa unde, temporibus sunt at atque eos quibusdam nemo nulla neque alias corporis commodi laboriosam ratione, placeat repudiandae quia quo ipsam quisquam? Neque vel praesentium cum animi deserunt, dignissimos consectetur architecto quidem quas tempora autem ex modi distinctio, reprehenderit nihil qui dolor iure in consequatur. Harum perferendis odio illo fuga cum quo tempora excepturi voluptates, rerum repudiandae iure? Corporis est fuga nulla odio libero, iste vel et accusamus minima quae beatae reprehenderit saepe possimus placeat consequatur debitis ex dicta veniam, aliquam neque, veritatis ducimus atque labore ea. Excepturi error ad accusamus vero, maiores modi, rem quam perferendis dolorem fuga veniam. Nobis molestias doloribus nisi dolorum neque aliquam incidunt dolores sed inventore ea libero quos et repudiandae eveniet laudantium eos perferendis sunt, eligendi facere ratione! Fugit alias ab dolorum corporis iusto temporibus qui, aspernatur, possimus reprehenderit unde voluptate assumenda natus aliquam! Quaerat amet autem repellat fugiat corrupti et possimus. Quaerat itaque eum cumque in architecto et repellat ipsa, culpa animi ipsum hic rerum accusantium provident voluptas unde, placeat possimus, assumenda quasi dignissimos maiores obcaecati veritatis quisquam! Debitis nostrum eum deleniti rerum dignissimos necessitatibus nisi omnis blanditiis soluta sunt nulla perspiciatis ratione hic at, eveniet explicabo, asperiores magnam quasi perferendis ut id dolorum? Iste perferendis similique aliquid laboriosam. Dignissimos repellendus, officia laboriosam tempora a explicabo corporis asperiores quos est vero qui cupiditate hic iusto in voluptatem ipsam magnam earum exercitationem perspiciatis omnis ipsa deleniti porro id. Similique aut eligendi necessitatibus suscipit, reprehenderit aliquam numquam nobis? Accusamus dolor nam neque magnam voluptate voluptatibus quos alias aperiam praesentium sed sit suscipit officiis aspernatur doloremque nisi repellendus itaque earum repellat, tempore impedit obcaecati reprehenderit iusto veniam saepe. Repellendus dolores animi excepturi, sapiente dicta hic incidunt fugit architecto asperiores aut, velit sint voluptatibus distinctio facilis laudantium optio in omnis. Ea maiores vel tempore libero illum voluptates in laborum possimus quos.

`;
const Details: React.FC<any> = ({ articleId = 1 }) => {
    // const b = Base64.decode("MDxwPjxicj48L3A-PHAgc3R5bGU9InRleHQtYWxpZ246IGNlbnRlcjsgIj48c3Ryb25nPuOAiuWOn-Wni-ekvuS8mueahOino-S9k-WSjOmYtue6p-ekvuS8mueahOa8lOi_m-OAi-WtpuahiDwvc3Ryb25nPjwvcD48cCBzdHlsZT0idGV4dCAtIGFsaWduOiBjZW50ZXI7ICI-PHN0cm9uZz7igJzku47lpbTpmrbnpL7kvJrliLDlsIHlu7rnpL7kvJrigJ08L3N0cm9uZz48L3A-PHA-PHN0cm9uZz7kuIDjgIHmlZnmnZDliIbmnpA8L3N0cm9uZz48L3A-PHA-PHNwYW4gc3R5bGU9ImZvbnQgLSBmYW1pbHk6IOWui-S9kzsgIj7nrKzkuIDmoYbigJzljp_lp4vnpL7kvJrnmoTop6PkvZPlkozpmLbnuqfnpL7kvJrnmoTmvJTov5vigJ3vvIzorrLov7Dljp_lp4vnpL7kvJrjgIHlpbTpmrbnpL7kvJrjgIHlsIHlu7rnpL7kvJrjgIHotYTmnKzkuLvkuYnnpL7kvJrkuqfnlJ_lkozlj5HlsZXnmoTljobnqIvvvIzpmJDmmI7kurrnsbvnpL7kvJrnlLHkvY7nuqfliLDpq5jnuqfjgIHnlLHnroDljZXliLDlpI3mnYLnmoTlj5HlsZXop4TlvovjgII8L3NwYW4-PC9wPjxwPjxzcGFuIHN0eWxlPSJmb250IC0gZmFtaWx5OiDlrovkvZM7ICI-56ys5LiA5qGG4oCc5Y6f5aeL56S-5Lya55qE6Kej5L2T5ZKM6Zi257qn56S-5Lya55qE5ryU6L-b4oCd77yM5YyF5ous5Lik55uu44CC56ys5LiA55uu4oCc5LuO5Y6f5aeL56S-5Lya5Yiw5aW06Zq256S-5Lya4oCd77yM5Li76KaB6ZiQ6L-w5Y6f5aeL56S-5Lya5ZKM5aW06Zq256S-5Lya55Sf5Lqn5Yqb44CB55Sf5Lqn5YWz57O755qE54m554K55Y-K5YW25Li76KaB55-b55u-77yM5aW06Zq256S-5Lya5Luj5pu_5Y6f5aeL56S-5Lya5piv5Y6G5Y-y55qE6L-b5q2l44CC56ys5LqM55uu4oCc5LuO5bCB5bu656S-5Lya5Yiw6LWE5pys5Li75LmJ56S-5Lya4oCd77yM5Li76KaB6ZiQ6L-w6ICB5bu656S-5Lya5ZKM6LWE5pys5Li75LmJ56S-5Lya55qE55Sf5Lqn5Yqb44CB55Sf5Lqn5YWz57O754m554K55Lul5Y-K6L-Z5Lik5Liq56S-5Lya5Lit57uf5rK76Zi257qn5Yml5YmK6KKr57uf5rK76Zi257qn55qE5pa55byP77yM6ZiQ5piO6LWE5pys5Li75LmJ55Sf5Lqn5YWz57O75Lqn55Sf55qE5Y6G5Y-y6L-H56iL44CB6LWE5pys5Li75LmJ56S-5Lya55qE5Z-65pys55-b55u-77yM6K6y6L-w6LWE5pys5Li75LmJ57uP5rWO5Y2x5py655qE6KGo546w44CB5a6e6LSo44CCPC9zcGFuPjwvcD48cD48c3BhbiBzdHlsZT0iZm9udCAtIGZhbWlseTog5a6L5L2TOyAiPui_meS4pOebruWGheWuuemHh-eUqOWOhuWPsuaAp-iusui_sOaWueW8j--8jOS7peeUn-S6p-WKm-S4jueUn-S6p-WFs-ezu--8jOe7j-a1juWfuuehgOS4juS4iuWxguW7uuetkeS5i-mXtOeahOWFs-ezu-S4uuS4u-e6v--8jOWbnumhvuS6uuexu-ekvuS8muWPkeWxleeahOWOhuWPsu-8jOW4ruWKqeWtpueUn-aHguW-l-S6uuexu-ekvuS8mueUseS9jue6p-WIsOmrmOe6p-OAgeeUseeugOWNleWIsOWkjeadgueahOWPkeWxleWOhueoi--8jOS7peiuuuS7juWPsuWHuueahOaWueW8j-W8leWvvOWtpueUn-eQhuino-S6uuexu-ekvuS8muWPkeWxleeahOi2i-WKv--8jOaYjuehrui1hOacrOS4u-S5iee7iOeptuimgeiiq-ekvuS8muS4u-S5ieaJgOWPluS7o-OAgjwvc3Bhbj48L3A-PHA-PHN0cm9uZz7kuozjgIHph43ngrnpmr7ngrk8L3N0cm9uZz48L3A-PHA-PHNwYW4gc3R5bGU9ImZvbnQgLSBmYW1pbHk6IOWui-S9kzsgIj4xLiDljp_lp4vnpL7kvJrnmoTln7rmnKznibnlvoHvvIjnlJ_kuqflipvjgIHnlJ_kuqflhbPns7vnrYnmg4XlhrXvvIk8L3NwYW4-PC9wPjxwPjxzcGFuIHN0eWxlPSJmb250IC0gZmFtaWx5OiDlrovkvZM7ICI-Mi4g56eB5pyJ5Yi25Lqn55Sf55qE5Y6f5Zug44CB5qCH5b-X5ZKM5b2x5ZONPC9zcGFuPjwvcD48cD48aW1nIHNyYz0iaHR0cHM6Ly90Ny5iYWlkdS5jb20vaXQvdT0yNTI5NDc2NTEwLDMwNDE3ODU3ODImZm09MTkzJmY9R0lGIiBhbHQ9Imh0dHBzOi8vdDcuYmFpZHUuY29tL2l0L3U9MjUyOTQ3NjUxMCwzMDQxNzg1NzgyJmZtPTE5MyZmPUdJRiIgZGF0YS1ocmVmPSJodHRwczovL3Q3LmJhaWR1LmNvbS9pdC91PTI1Mjk0NzY1MTAsMzA0MTc4NTc4MiZmbT0xOTMmZj1HSUYiLz48L3A-PHA-PHN0cm9uZz7kuInjgIHmoLjlv4PntKDlhbs8L3N0cm9uZz48L3A-PHA-PHN0cm9uZz7mlL_msrvorqTlkIw6PC9zdHJvbmc-PHNwYW4gc3R5bGU9ImZvbnQtZmFtaWx5OiDlrovkvZM7Ij7lrabkuaDkurrnsbvnpL7kvJrlj5HlsZXnmoTkuIDoiKzop4TlvovvvIzluK7liqnlrabnlJ_moJHnq4vkuLrlhbHkuqfkuLvkuYnov5zlpKfnkIbmg7PlkozkuK3lm73nibnoibLnpL7kvJrkuLvkuYnlhbHlkIznkIbmg7PogIzlpYvmlpfnmoTkv6Hlv7U76IO95aSf6K6k6K-G5Yiw56S-5Lya5Li75LmJ56S-5Lya5Luj5pu_6LWE5pys5Li75LmJ56S-5Lya5piv5Y6G5Y-y5Y-R5bGV55qE5b-F54S26LaL5Yq_77yM5qCR56uL6YGT6Lev6Ieq5L-h44CB55CG6K666Ieq5L-h5ZKM5Yi25bqm6Ieq5L-h44CCPC9zcGFuPjwvcD48cD48c3Ryb25nPuenkeWtpueyvuelnjo8L3N0cm9uZz48c3BhbiBzdHlsZT0iZm9udC1mYW1pbHk6IOWui-S9kzsiPuaPreekuueUn-S6p-WKm-S4jueUn-S6p-WFs-ezu-eahOefm-ebvui_kOWKqOaYr-ekvuS8muWPkeWxleagueacrOWKqOWKm--8jOW8mOaJrOenkeWtpueyvuelnuOAgui-qeivgeeahOeci-W-heWwgeW7uuekvuS8muOAgei1hOacrOS4u-S5ieekvuS8mueahOaWh-aYju-8jOi-qeivgeeahOeci-W-heWwgeW7uuekvuS8muWSjOi1hOacrOS4u-S5ieekvuS8mueahOWPkeWxlea8lOWPmOOAgjwvc3Bhbj48L3A-PHA-PHN0cm9uZz7lm5vjgIHmlZnlrabov4fnqIs8L3N0cm9uZz48L3A-PHA-PHN0cm9uZz7orq7popjkuIDvvJrkuLrku4DkuYjku47lpbTpmrbnpL7kvJrlj5bku6Pljp_lp4vnpL7kvJrmmK_ljoblj7LnmoTov5vmraXvvJ88L3N0cm9uZz48L3A-PHA-PHNwYW4gc3R5bGU9ImZvbnQtZmFtaWx5OiDlrovkvZM7Ij7lr7zlhaXvvJrorr7nlpHlr7zlhaXms5U8L3NwYW4-PC9wPjxwPjxzcGFuIHN0eWxlPSJmb250LWZhbWlseTog5a6L5L2TOyI-6Zeu6aKY5LiA77ya5qC55o2u5p2Q5paZ5YaF5a655Y-K5pWZ5p2Q77yM5qaC5ous5Y6f5aeL56S-5Lya55Sf5Lqn55Sf5rS75oOF5Ya1PC9zcGFuPjwvcD48cD48YnI-PC9wPjxwPjxzdHJvbmc-55-l6K-G54K5PC9zdHJvbmc-PHNwYW4gc3R5bGU9ImZvbnQtZmFtaWx5OiDlrovkvZM7Ij7vvJrljp_lp4vnpL7kvJrnmoTnlJ_kuqflipvlkoznlJ_kuqflhbPns7vnibnngrk8L3NwYW4-PC9wPjxwPjxzdHJvbmc-5ouT5bGV77yaPC9zdHJvbmc-PHNwYW4gc3R5bGU9ImZvbnQtZmFtaWx5OiDlrovkvZM7Ij7nlJ_kuqflipvkuI7nlJ_kuqflhbPns7s8L3NwYW4-PC9wPjxwPjxzcGFuIHN0eWxlPSJmb250LWZhbWlseTog5a6L5L2TOyI-6Zeu6aKY5LqM77ya5Y6f5aeL56S-5Lya5pyr5pyf55Sf5Lqn5YWz57O755qE5Y-Y5YyW5Lul5Y-K5Y6f5aeL56S-5Lya5pyA57uI6Kej5L2T55qE5Y6f5Zug5piv5LuA5LmI77yfPC9zcGFuPjwvcD48cD48c3BhbiBzdHlsZT0iZm9udC1mYW1pbHk6IOS7v-WuizsiPuadkOaWme-8muWOn-Wni-ekvuS8muWQjuacn-WPkeeUn-eahOeVnOeJp-S4muWQjOWGnOS4mueahOWIhuemu-OAguWOn-Wni-S6uuexu-W-geacjeiHqueEtueahOiDveWKm-acieS6huaPkOmrmO-8jOS_g-i_m-S6huWKs-WKqOeUn-S6p-eOh-eahOWinumVv--8jOW8lei1t-S6humDqOiQvemXtOeahOS6p-WTgeS6pOaNou-8jOS4uuengeacieWItueahOS6p-eUn-WIm-mAoOS6hueJqei0qOWJjeaPkOOAguWOn-Wni-ekvuS8muacq-acn--8jOWboOmHkeWxnuW3peWFt-eahOS9v-eUqOWSjOaUueiJr-W8lei1t-eahOaJi-W3peS4muWQjOWGnOS4mueahOWIhuemu-OAguS9v-WVhuWTgeeUn-S6p-W-l-WIsOi_hemAn-WPkeWxle-8jOS7peaJi-W3peS4muS4uuS4reW_g-eahOWfjuW4guW8gOWni-WHuueOsO-8jOmZpOS6huiHqueUseS6uuWSjOWltOmatuS5i-mXtOeahOW3ruWIq-Wklu-8jOWPiOWHuueOsOS6huWvjOS6uuWSjOept-S6uueahOW3ruWIq-OAguWltOmatuekvuS8muWIneacn-WHuueOsOeahOS4k-mXqOe7j-iQpeWVhuWTgeS5sOWNlueahOWVhuS6uuOAguWug-S_g-i_m-S6huWltOmatuWItueahOW3qeWbuuWSjOWPkeWxle-8jOW8gOWni-enr-e0r-S6huWVhuS4mui1hOacrO-8jOiEkeWKm-WKs-WKqOW8gOWni-S7juS9k-WKm-WKs-WKqOS4reWIhuemu-WHuuadpeOAgjwvc3Bhbj48L3A-PHAgc3R5bGU9InRleHQtYWxpZ246IHJpZ2h0OyI-PHNwYW4gc3R5bGU9ImZvbnQtZmFtaWx5OiDku7_lros7Ij7kvZXnm5vmmI7jgIrotKLnu4_lpKfovp7lhbjjgIvvvIjkuK3lm73otKLmlL_nu4_mtY7lh7rniYjnpL7vvIwxOTkw77yJPC9zcGFuPjwvcD48cD48c3Ryb25nPuefpeivhueCue-8mjwvc3Ryb25nPjxzcGFuIHN0eWxlPSJmb250LWZhbWlseTog5a6L5L2TOyI-5Y6f5aeL56S-5Lya6Kej5L2T55qE5Y6f5Zug77yb56eB5pyJ5Yi255qE5Lqn55SfPC9zcGFuPjwvcD48cD48c3Ryb25nPuivvuWQjue7g-S5oO-8mjwvc3Ryb25nPjwvcD48cD48aW1nIHNyYz0iaHR0cHM6Ly90Ny5iYWlkdS5jb20vaXQvdT0xOTU2NjA0MjQ1LDM2NjI4NDgwNDUmZm09MTkzJmY9R0lGIiBhbHQ9Imh0dHBzOi8vdDcuYmFpZHUuY29tL2l0L3U9MTk1NjYwNDI0NSwzNjYyODQ4MDQ1JmZtPTE5MyZmPUdJRiIgZGF0YS1ocmVmPSJodHRwczovL3Q3LmJhaWR1LmNvbS9pdC91PTE5NTY2MDQyNDUsMzY2Mjg0ODA0NSZmbT0xOTMmZj1HSUYiLz48L3A-PHA-PHNwYW4gc3R5bGU9ImZvbnQtZmFtaWx5OiDku7_lros7Ij7lpbTpmrbliLbluqbvvIzmmK_kurrnsbvljoblj7LkuIrmnIDph47om67jgIHmnIDmrovphbfnmoTkuIDnp43liaXliYrliLbluqbjgILlnKjlj6TnvZfpqazvvIzlpbTpmrbkuLvmiornlJ_kuqflt6XlhbfliIbkuLrkuInnp43vvJrnrKzkuIDnp43mmK_igJzkvJror7Tor53nmoTlt6XlhbfigJ3vvIzljbPlpbTpmrbvvJvnrKzkuoznp43mmK_igJzmnInlo7DnmoTlt6XlhbfigJ3vvIzmjIfogJXniZvkuIDnsbvvvJvnrKzkuInnp43mmK_igJzml6Dlo7DnmoTlt6XlhbfigJ3vvIzlpoLlpKfovabnrYnjgILlnKjlpbTpmrbkuLvnnLzph4zvvIzlpbTpmrblkoznibLnlZzjgIHlt6XlhbfkuIDmoLfvvIzmmK_kuLvkurrnmoTotKLkuqflkozllYblk4HvvIzlj6_ku6Xku7vmhI_ovazorqnjgIHlh7rnp5_jgIHotaDpgIHjgIHkubDljZbnlJroh7PmnYDmrbvnmoTjgILku5bku6zmsqHmnInku7vkvZXmnYPliKnvvIzov57lrZDlpbPkuZ_lsZ7kuo7kuLvkurrvvIzkuI3lj5fms5Xlvovkv53miqTjgILlpbTpmrbkuLvorqnlpbTpmrbmiLTnnYDohJrplaPlgZrlkITnp43oi6blvbnvvIzmiormnIDlvLrlo67mnIDpqoHli4fnmoTmjJHlh7rmnaXlgZrop5Lmlpflo6vvvIzmlL7lnKjmlpflhb3lnLrph4zlvLrov6vku5bku6zlkIzph47lhb3miZPmlpfmiJbkupLnm7jmlLvmnYDvvIzkvpvoh6rlt7HlqLHkuZDjgILov5nnp43op5LmlpfmnoHlhbbph47om67mrovlv43vvIzop5LmlpfnmoTnu5PmnpzmmK_op5Lmlpflo6vlhajpg6jmrbvkuqHmiJbnlZnkuIvmnIDlkI7kuIDkurrjgII8L3NwYW4-PC9wPjxwPjxzcGFuIHN0eWxlPSJmb250LWZhbWlseTog5a6L5L2TOyI-5LuO5LiK6L-w5p2Q5paZ5Lit5YiG5p6Q5aW06Zq256S-5Lya55qE55Sf5Lqn5YWz57O754m554K5PC9zcGFuPjwvcD48cD48c3BhbiBzdHlsZT0iZm9udC1mYW1pbHk6IOWui-S9kzsiPiA8L3NwYW4-PC9wPjxwPjxzdHJvbmc-6K6u6aKY5LqM77ya5oCO5qC355yL5b6F6Zi257qn56S-5Lya55qE5ryU6L-b5ZKM6LWE5pys5Li75LmJ56S-5Lya55qE5YW06KGw77yfPC9zdHJvbmc-PC9wPjxwPjxzdHJvbmc-6K6u6aKY5LiJ77ya5Yik5pat5LiA5Liq56S-5Lya5Yi25bqm5piv5ZCm6L-b5q2l6L-Y5piv5YCS6YCA55qE5qCH5YeG5piv5LuA5LmI77yfPC9zdHJvbmc-PC9wPjxwPjxicj48L3A-")
    // console.log(b);

    const params = useParams();
    var [article, setArticle] = useState<string>('')
    utils.hooksUtils.useOnMount(() => {
        ArticleApi.getArticle(Number(params.articleId)).then((res) => {
            console.log(res);
            setArticle(res.data.context)
        })
    })
    return (
        <Layout>
            <Content style={{ margin: "1vw 5vw" }}>
                <Editor
                    defaultConfig={{ readOnly: true }}
                    value={article}
                />
            </Content>
        </Layout>
    );
};

export default Details;