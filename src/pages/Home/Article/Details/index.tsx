import { useParams } from "react-router-dom";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import { Anchor, Col, Divider, Image, Layout, Menu, Row, theme } from "antd";
import WangEditorComp from "@/components/MarkdownComp/WangEditComp";
import utils from "@/utils";
import { ArticleApi } from "@/api";
import { Editor } from "@wangeditor/editor-for-react";

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

const Details: React.FC<any> = () => {
    // const params = useParams();
    // console.log(params.artcleId);
    var [article, setArticle] = useState<string>('')
    utils.hooksUtils.useOnMount(() => {
        ArticleApi.getArticle().then((res) => {
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