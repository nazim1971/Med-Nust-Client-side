

const SellerRoute = () => {
    const [role, isLoading] = useRole()

    if (isLoading) return <LoadingSpinner />
    if (role === 'host') return children
    return <Navigate to='/dashboard' />
  }
};

export default SellerRoute;