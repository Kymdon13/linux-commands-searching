# Anaconda

一个包管理工具

### 创建环境

```shell
# 创建新环境
conda create --name myenv
# 其中 `myenv` 是你想要创建的环境的名称。你也可以指定要在环境中安装的 Python 版本和其他软件包，例如：
conda create --name myenv python=3.8 numpy pandas
# 激活base环境
source activate
# 激活虚拟环境
conda activate myenv
# 退出虚拟环境或base环境
conda deactivate
```

### 管理环境

```shell
# 查看所有环境
conda env list
# 查看当前激活的环境
conda info --envs
```

### 安装、更新和删除软件包

```shell
# 安装软件包
conda install package_name
# 更新软件包
conda update package_name
# 删除软件包
conda remove package_name
```

### 添加镜像源

```shell
# 添加清华源
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
# 删除源
conda config --remove channels https://mirrors.aliyun.com/anaconda/pkgs/free/
```

### 其他常用操作

```shell
# 查看已安装的软件包
conda list
# 卸载环境
conda env remove --name myenv
```
